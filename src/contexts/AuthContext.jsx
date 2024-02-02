import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase/firebase";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('Searching user...');
    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            
        if (user) {
            const {displayName, photoURL, uid} = user;

            if (!displayName || !photoURL) {
            console.log(user)
            }

            setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
            })
        } else {
            setUser(undefined)
        }
        })

        return () => {
        unsubscribe();
        }
    }, [])

    async function signInEmailAndPassword(email, password) {
        const result = await signInWithEmailAndPassword(auth, email, password)

        if (result.user) {
        const {displayName, photoURL, uid} = result.user;

        if (!displayName || !photoURL) {
            console.log('Missing account info!')
        }

        setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
        })
        //   window.open('/', '_self');
        return result.user;
        } 
        
    }

    const loginWithGoogle = async () => {
        
        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider)
        if (result.user) {
        const {displayName, photoURL, uid} = result.user;
        setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
        })
        //   window.open('/', '_self');
        return result.user
        }
    
    }

    const loginWithGithub = async () => {
        
        const provider = new GithubAuthProvider();

        const result = await signInWithPopup(auth, provider)
        if (result.user) {
        const {displayName, photoURL, uid} = result.user;
        setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
        })
        //   window.open('/', '_self');
        return result.user
        }
    
    }

    async function appSignOut() {
        await signOut(auth);
        setUser(undefined);
        // window.open('/', '_self');
        return ;
        
    }

    async function passwordRecover(email) {
        await sendPasswordResetEmail(auth, email);
        return ;
        
    }

    async function createUserEmailAndPassword(email, password, name) {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        let user = userCredential.user
        user.updateProfile({
        displayName: name,
        })
        return userCredential;
    } 



    return (
        <>
            
            <AuthContext.Provider value={{ 
              user, 
              signInEmailAndPassword, 
              appSignOut, 
              passwordRecover,
              createUserEmailAndPassword,
              loginWithGoogle,
              loginWithGithub
              }}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthContextProvider;