import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from "firebase/firestore";

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

// Allowed frontend origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5173/", "http://localhost:3000", "http://localhost:3000/", "https://contentflip-waitlist.vercel.app"];

const handler = async (req, res) => {
  const origin = req.headers.origin || "";
  if (!allowedOrigins.includes(origin)) return res.status(403).json({ error: "Access Denied" });

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    if (req.method === "POST") {
      const { email } = req.body;
      if (!email) return res.status(400).json({ error: "Email is required" });

      const emailRef = doc(db, "emails", email);
      const docSnap = await getDoc(emailRef);

      if (docSnap.exists()) return res.status(409).json({ error: "Email already exists" });

      await setDoc(emailRef, { email, joinedAt: serverTimestamp() });
      return res.status(201).json({ message: "Email added successfully" });
    }

    if (req.method === "GET") {
      const querySnapshot = await getDocs(collection(db, "emails"));
      const emails = querySnapshot.docs.map((doc) => doc.data());
      return res.status(200).json(emails);
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "An unknown error occurred" });
  }
}
export default handler;