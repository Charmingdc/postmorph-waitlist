import { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from "firebase/firestore";

// Firebase config (from environment variables)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Allowed frontend origins
const allowedOrigins = ["https://contentflip-waitlist.vercel.app", "https://contentflip.vercel.app"];

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const origin = req.headers.origin || "";
  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ type: "error", message: "Access Denied" });
  }

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    if (req.method === "POST") {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ type: "error", message: "Email is required 🥺" });
      }

      const emailRef = doc(db, "emails", email);
      const docSnap = await getDoc(emailRef);

      if (docSnap.exists()) {
        return res.status(409).json({ type: "warning", message: "You're already on the waitlist! 🤗" });
      }

      await setDoc(emailRef, { email, joinedAt: serverTimestamp() });
      return res.status(201).json({ type: "success", message: "Congrats! Waitlist joined successfully 🎉" });
    } 
    
    
    if (req.method === "GET") {
     const querySnapshot = await getDocs(collection(db, "emails"));
     console.log('Email found', querySnapshot.docs)
     const emailCount = querySnapshot.size;

     return res.status(200).json({ 
       type: "success", 
       message: "Email count fetched successfully!", 
       count: emailCount 
     });
    }

    return res.status(405).json({ type: "error", message: "Method Not Allowed" });
  } catch (error) {
    return res.status(500).json({ type: "error", message: error instanceof Error ? error.message : "An unknown error occurred" });
  }
};

export default handler;