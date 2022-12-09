import React, {useEffect, useState} from "react";
import {Message, UserType} from "./ChatTypes";
import Messages from "./Components/Messages";
import Members from "./Components/Members";

export default function Chat () {
    const [members, setMembers] = useState<Array<UserType>>([]);
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [userInfo, setUserInfo] = useState<UserType>({name: '', update: '', id: 0});

    const checkStorage = (keys: Array<string>) => {
        if (keys.includes('users')) {
            const currentMembers: string | null = localStorage.getItem('users');
            if (currentMembers) setMembers(JSON.parse(currentMembers));
        }
        if (keys.includes('messages')) {
            const currentMessages: string | null = localStorage.getItem('messages');
            if (currentMessages !== null) setMessages(JSON.parse(currentMessages));
        }
        if (keys.includes('currentUser')) {
            const currentUser: string | null = sessionStorage.getItem('currentUser');
            if (currentUser) setUserInfo(JSON.parse(currentUser));
        }
    }

    window.onstorage = (e) => {
        if (e.key) checkStorage([e.key])
    }

    useEffect(() => {
        checkStorage(['users', 'messages', 'currentUser']);
    }, [])

    return (
        <div className='bg-teal-200 h-full lg:grid lg:grid-cols-7'>
            <div className='hidden lg:block lg:col-span-2 lg:h-screen'>
                <Members members={members}/>
            </div>
            <div className='lg:h-screen col-span-5'>
                <Messages
                    content={messages}
                    currentUser={userInfo}
                    update={()=>{checkStorage(['messages'])}}
                />
            </div>
        </div>
    );
}