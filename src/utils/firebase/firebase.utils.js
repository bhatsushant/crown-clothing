import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClOTbwFFxsgHrmXRUYlqRtTRYBmwamslc",
  authDomain: "crown-clothing-db-dd755.firebaseapp.com",
  projectId: "crown-clothing-db-dd755",
  storageBucket: "crown-clothing-db-dd755.appspot.com",
  messagingSenderId: "388611934621",
  appId: "1:388611934621:web:2baa24bcb61a2729e44774"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDoc = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt})
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
}