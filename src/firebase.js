// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase 設定
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyCa4a1rlRvg8vId_lQy865eqvw_aDAJz2w",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "nile2-18aa3.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "nile2-18aa3",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "nile2-18aa3.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "850359693771",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:850359693771:web:a54cd6ca50acd70789064e",
};

// Firebase 初期化
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 初期化用 Promise（複数回呼ばれても一度だけ処理）
let _initPromise = null;

/**
 * initFirebase(): Firebase 初期化 + 匿名ログインを待つ
 */
export function initFirebase() {
  if (_initPromise) return _initPromise;

  _initPromise = new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user); // user が null の場合も resolve
      },
      (err) => {
        unsubscribe();
        reject(err);
      }
    );

    // 未サインインなら匿名ログインを試す
    signInAnonymously(auth).catch(() => {
      /* エラーは onAuthStateChanged で捕捉される */
    });
  });

  return _initPromise;
}

/**
 * signInAnon(): 明示的に匿名ログイン
 */
export function signInAnon() {
  if (!auth) return Promise.reject(new Error("Firebase auth not initialized."));
  return signInAnonymously(auth);
}

// Firebase App をそのままエクスポート（必要な場合）
export { app };
