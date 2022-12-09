import React, {useEffect, useState} from 'react';
import Authorization from "./Components/Authorization/Authorization";
import Chat from "./Components/Chat/Chat";
import moment from "moment";
import {UserType} from "./Components/Chat/ChatTypes";

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    useEffect(() => {
        const user = sessionStorage.getItem('currentUser');
        if (user) setIsAuth(true);
    }, []);

    const startChat = (name: string) => {
        const user: UserType = {
            name: name,
            update: moment().format('hh.mm'),
            id: Date.now(),
        }
        sessionStorage.setItem('currentUser', JSON.stringify(user));

        const users: string | null = localStorage.getItem('users');
        let currentUsers: Array<UserType> = [];
        if (users) currentUsers = JSON.parse(users);
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));

        const messages:string | null = localStorage.getItem('messages');
        if (!messages) localStorage.setItem('messages', JSON.stringify([]));

        setIsAuth(true);
    }

    return (
        <div className='bg-teal-400 h-full'>
            {isAuth && <Chat/>}
            {!isAuth && <Authorization startChat={startChat}/>}
        </div>
    );
}

export default App;
