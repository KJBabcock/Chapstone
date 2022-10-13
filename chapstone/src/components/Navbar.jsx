import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <a href = "/" className={style.heading}>Chapstone!</a>
      {user ? <a href="/"><LogOut /></a> : <SignIn />}
      {user ? <a href="/account" className="account" user={user}>{user.displayName}<img src={user.photoURL} alt={user.displayName} className="account-photo"/></a> : null}
    </div>
  );
};

export default Navbar;