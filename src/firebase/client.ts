import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  appId: import.meta.env.VITE_FB_APP_ID
});

// default Firestore DB for now
export const dbNotes = getFirestore(app, import.meta.env.VITE_FB_NOTES_DB || "(default)");
export const SITE_ID = (import.meta.env.VITE_SITE_ID || "devscriptstax") as string;