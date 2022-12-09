import React, {useState} from "react";
import {AuthProps} from "./AuthTypes";

export default function Authorization (props: AuthProps) {
    const [able, setAble] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    const changeName = (text: string) => {
        setName(text);
        setAble(text.trim().length >= 3);
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-2xl w-[90%] lg:w-[40%] md:w-[60%]">
                <div className="p-8 md:p-10">
                    <div className="items-center text-center text-lg mb-6 md:mb-8">
                        <p className="text-3xl font-semibold mb-4">Привет!</p>
                        <p>Придумай себе ник <br/>(от 3 до 20 символов)</p>
                    </div>
                    <div className="items-center text-lg mb-6 md:mb-8">
                        <input
                            type="text"
                            className="bg-gray-200 p-4 focus:outline-none w-full rounded-lg text-center"
                            placeholder="Твой ник"
                            maxLength={20}
                            value={name}
                            onChange={(e) => changeName(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && able) {
                                    props.startChat(name);
                                }
                            }}
                        />
                    </div>
                    <div
                        className={
                            `rounded-lg font-medium p-4 text-white w-full text-center
                            ${able ? 'bg-gray-900 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`
                        }
                        onClick={() => {
                            if (able) props.startChat(name.trim());
                        }}
                    >
                        НАЧАТЬ
                    </div>
                </div>
            </div>
        </div>
    );
}