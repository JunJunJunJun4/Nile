// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let _initPromise = null;

/**
 * initFirebase(): 初期化と（必要なら）匿名ログインを行い、
 * 認証状態が確定するまで待つ。複数回呼んでも一度だけ実行される。
 */
export function initFirebase() {
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
  return signInAnonymously(auth);
}
