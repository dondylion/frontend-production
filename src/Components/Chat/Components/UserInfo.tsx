import React from "react";
import {UserInfoProps} from "../ChatTypes";

export default function UserInfo(props: UserInfoProps) {
    return (
        <div className='h-screen text-center flex flex-col justify-center border-r p-4'>
            <p className='text-3xl mb-4'>Ваш ник:</p>
            <div className='text-lg font-semibold bg-black rounded-xl text-white p-2'>{props.user.name}</div>
        </div>
    );
}