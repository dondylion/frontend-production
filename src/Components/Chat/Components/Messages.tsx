import React, {useEffect, useRef, useState} from "react";
import {Message, MessagesProps} from "../ChatTypes";
import moment from "moment";

export default function Messages(props: MessagesProps) {
    const [message, setMessage] = useState<string>('');
    const {content, currentUser} = props;
    const chatRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (chatRef && chatRef.current) {
            chatRef.current.scrollBy(0, chatRef.current.scrollHeight);
        }
    }, [content])

    const onSend = (key: string) => {
        if (key === 'Enter') {
            if (message.trim().length > 0) {
                const newMessage: Message = {
                    text: message.trim(),
                    create: moment().format('hh.mm'),
                    user: currentUser.name,
                    id: Date.now(),
                }
                const newMessages = [...content];
                newMessages.push(newMessage);
                localStorage.setItem('messages', JSON.stringify(newMessages));
                setMessage('');
                props.update();
            }
        }
    }

    return (
        <div className='bg-slate-50 h-screen p-4 flex flex-col justify-between'>
            <div className='h-[85vh] p-2 overflow-y-scroll' ref={chatRef}>
                {content.map((item, index) => {
                    let author: string | null = null;
                    if (index === 0 || content[index - 1].user !== item.user) {
                        author = item.user;
                    }
                    return (
                        <div key={item.id} className='flex flex-col w-max max-w-[50%]'>
                            {author &&
                            <div className='text-md text-gray-400'>{author}</div>
                            }
                            <div className='px-4 py-2 bg-slate-100 rounded-md mb-4 shadow-md'>
                                <div className='text-xl text-start whitespace-pre-wrap break-words'>{item.text}</div>
                                <p className='text-sm text-end'>{item.create}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='w-full border-t p-4 pb-0'>
                <input
                    className='w-full bg-slate-200 p-2 rounded-lg'
                    placeholder='Введите сообщение...'
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                    onKeyPress={(e) => onSend(e.key)}
                />
            </div>
        </div>
    );
}