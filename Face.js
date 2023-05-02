import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "./Firebaseconfig";

const Face = () => {
  const [user, Setuser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Setuser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogout = () => {
    Setuser(null);
  };
  return (
    <div className="wrapper">
      <div className="box">
        {user ? (
          <div>
            <button onClick={() => handleLogout()}>log out</button>
            <h3>Welcome {user.displayName}</h3>
            <p>{user.email}</p>
          </div>
        ) : (
          <div>
            <button onClick={() => handleLogin()}>sign in with facebook</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Face;
