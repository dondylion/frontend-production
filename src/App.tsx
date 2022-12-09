import React, {useEffect, useState} from 'react';
import Authorization from "./Components/Authorization/Authorization";
import Chat from "./Components/Chat/Chat";
import moment from "moment";

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    useEffect(() => {
        const user = sessionStorage.getItem('currentUser');
        if (user) setIsAuth(true);
    }, []);

    const startChat = (name: string) => {
        const user = {name: name, update: moment().format('hh.mm')}
        sessionStorage.setItem('currentUser', JSON.stringify(user));

        const users: string | null = localStorage.getItem('users');
        let currentUsers: Array<string> = [];
        if (users) currentUsers = JSON.parse(users);
        currentUsers.push(name);
        localStorage.setItem('users', JSON.stringify(currentUsers));
        setIsAuth(true);
    }

    return (
        <div className='bg-teal-400'>
            {isAuth && <Chat/>}
            {!isAuth && <Authorization startChat={startChat}/>}
        </div>
    );
}

export default App;
