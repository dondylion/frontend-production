import React, {useEffect, useState} from "react";
import {ChatProps, Message, UserType} from "./ChatTypes";
import UserInfo from "./Components/UserInfo";
import Messages from "./Components/Messages";
import Members from "./Components/Members";

export default function Chat (props: ChatProps) {
    const [members, setMembers] = useState<Array<string>>([]);
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [userInfo, setUserInfo] = useState<UserType>({name: '', update: ''});

    const checkStorage = (keys: Array<string>) => {
        if (keys.includes('users')) {
            const currentMembers: string | null = localStorage.getItem('users');
            if (currentMembers) setMembers(JSON.parse(currentMembers));
        }
        if (keys.includes('messages')) {
            const currentMessages: string | null = localStorage.getItem('messages');
            if (currentMessages) setMessages(JSON.parse(currentMessages));
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
        <div className='grid grid-cols-5 bg-teal-200'>
            <UserInfo user={userInfo}/>
            <Messages content={messages}/>
            <Members members={members}/>
        </div>
    );
}