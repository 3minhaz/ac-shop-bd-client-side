import firebaseInitialize from "../pages/Shared/Login/Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const registerWithEmail = (name, email, password, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser);
                addUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                // addUser(user.email,)
                console.log(user)
                // const redirect_uri = location?.state?.from || '/';
                history.replace('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false))
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    const signInUsingEmail = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                const redirect_uri = location?.state?.from || '/dashboard'
                history.replace(redirect_uri)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                setUser(user)
                const uid = user.uid;
                // ...
            } else {
                setUser({});
                // User is signed out
                // ...
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, [])

    useEffect(() => {
        fetch(`https://aqueous-citadel-84780.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data?.admin))
    }, [user?.email])

    const addUser = (email, name) => {
        const user = { email, displayName: name };
        console.log(user);
        fetch('https://aqueous-citadel-84780.herokuapp.com/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return {
        user,
        isLoading,
        isAdmin,
        registerWithEmail,
        signInUsingEmail,
        logout,
    }
}
export default useFirebase;