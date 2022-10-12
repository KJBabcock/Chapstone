import React from "react";
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const Account = () => {
    const [user] = useAuthState(auth)
    console.log("hello", user)
  return (
    <>
        <h1>Hello?</h1>
    </>
  );
};

export default Account;