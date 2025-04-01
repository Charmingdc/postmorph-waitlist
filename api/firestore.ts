import { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from "firebase/firestore";

// Firebase config (from environment variables)
const firebaseConfig = {
  apiKey: "AIzaSyC3mrpHnmoYHk2AxrUU6NUzjSmwbCJ4u8Y",
  authDomain: "contentflip-waitlist.firebaseapp.com",
  projectId: "contentflip-waitlist",
  storageBucket: "contentflip-waitlist.firebasestorage.app",
  messagingSenderId: "1095854282425",
  appId: "1:1095854282425:web:2544028cc295922dd62d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Allowed frontend origins
const allowedOrigins = ["http://localhost:3000", "https://contentflip-waitlist.vercel.app", "https://contentflip-waitlist.vercel.app/api/firestore"];

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