import { VercelRequest, VercelResponse } from "@vercel/node";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

// Firebase config (from environment variables)
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Allowed frontend domain
const allowedOrigin = "https://your-allowed-domain.com";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.headers.origin !== allowedOrigin) return res.status(403).json({ error: "Access Denied" });

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
   if (req.method === "POST") {
    const { email } = req.body;
     if (!email) return res.status(400).json({ error: "Email is required" });

     const emailRef = doc(db, "email", email);
     const docSnap = await getDoc(emailRef);

     if (docSnap.exists()) return res.status(409).json({ error: "Email already exists" });

     await setDoc(emailRef, { email, joinedAt: serverTimestamp() });
     return res.status(201).json({ message: "Email added successfully" });
   }

   return res.status(405).json({ error: "Method Not Allowed" });
 } catch (error: any) {
   return res.status(500).json({ error: error.message });
 }
}