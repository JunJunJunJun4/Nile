// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

const hasApiKey = Boolean(firebaseConfig.apiKey);

if (!hasApiKey) {
  console.error(
    "Missing Firebase apiKey. Set NEXT_PUBLIC_FIREBASE_API_KEY in .env.local and restart dev server."
  );
}

const app = hasApiKey
  ? getApps().length
    ? getApps()[0]
    : initializeApp(firebaseConfig)
  : null;
const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;

let _initPromise = null;

/**
 * initFirebase(): 初期化と（必要なら）匿名ログインを行い、
 * 認証状態が確定するまで待つ。複数回呼んでも一度だけ実行される。
 */
export function initFirebase() {
  if (!auth) {
    return Promise.reject(
      new Error("Firebase not initialized (missing apiKey).")
    );
  }
  if (_initPromise) return _initPromise;

  _initPromise = new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user); // user が null の場合も resolve（未認証）
      },
      (err) => {
        unsubscribe();
        reject(err);
      }
    );

    // すでにサインイン済みなら onAuthStateChanged のコールバックですぐ resolve される。
    // 未サインインなら匿名サインインを試みる（失敗しても onAuthStateChanged で判定される）。
    signInAnonymously(auth).catch(() => {
      /* エラーは onAuthStateChanged で拾うか無視（後で呼び出し元で扱う） */
    });
  });

  return _initPromise;
}

export { app, auth, db };
export function signInAnon() {
  if (!auth) return Promise.reject(new Error("Firebase auth not initialized."));
  return signInAnonymously(auth);
}
