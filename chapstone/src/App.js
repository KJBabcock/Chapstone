import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Account from './components/Account';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Routes, Route, Outlet} from 'react-router-dom';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const URL = "AIzaSyBiylYVG4rQ1fY136TzN0tS4ARQw1zA2KY";
  const [messages, setMessages] = useState(null)
  const [user] = useAuthState(auth)

  const getMessages = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setMessages(data);
};

  useEffect(() => {
    getMessages();
  }, []);
  //console.log(user)
  return (
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        <Navbar />
        <Routes>
          <Route path = "/account" element={<Account />} />
          {user ? <Route path='/' element={<Chat messages = {messages}/>} /> : null}
        </Routes>
      </section>
    </div>
  );
}

export default App;
