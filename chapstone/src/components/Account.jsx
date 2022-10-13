import React from "react";
import { useState, useEffect } from "react";
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";

const AccountEdit = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const initForm = {displayName: "", photoURL: ""}
    const [formRequest, setFormRequest] = useState(initForm)
    const initState = "";
    const [displayName, setDisplayName] = useState(initState)
    const [photoURL, setPhotoURL] = useState(initState)

    const navigate = useNavigate();

    function handleDisplayNameChange(e) {
        console.log(e.target.value)
        setDisplayName(e.target.value);
    }
    function handlePhotoURLChange(e) {
        setPhotoURL(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const result = {displayName: displayName, photoURL: photoURL}
        setFormRequest(result)
        console.log(result)
        fetch(`https://chapstone-35ae7-default-rtdb.firebaseio.com/`, {method: 'PUT', mode: "cors", body: JSON.stringify(result), headers: {"Content-Type": "application/json"}});
        navigate("/account")
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Edit</h1>
            <label htmlFor="displayName">
                Name:
            <input type="text" name="displayName" value={displayName} onChange={handleDisplayNameChange}/>
            </label>
            <label htmlFor="photoURL">
                Photo:
            <input type="text" name="photoURL" value={photoURL} onChange={handlePhotoURLChange}/>
            </label>
            <input type="submit" value="Submit" className="submit"/>
            <p className="end">...</p>
        </form>
    )
}

export default AccountEdit;