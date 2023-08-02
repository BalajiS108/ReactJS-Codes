import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import firebase from "firebase/app";
// import "firebase/auth";

function Firebase() {
  useEffect(() => {
    // Initialize Firebase app
    const firebaseConfig = {
      // Your Firebase project configuration
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful sign-in
        const user = result.user;
        console.log("Signed in user:", user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error("Sign-in error:", error);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Handle successful sign-out
        console.log("User signed out");
      })
      .catch((error) => {
        // Handle sign-out error
        console.error("Sign-out error:", error);
      });
  };

  return (
    <div>
      <h1>Firebase Integration Example</h1>
      <button onClick={handleSignIn}>Sign In with Google</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Firebase;
