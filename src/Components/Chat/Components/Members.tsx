import React from "react";
import {MembersProps} from "../ChatTypes";

export default function Members(props: MembersProps) {
    return (
        <div className='h-full p-4 text-center'>
            <p className='text-2xl font-semibold mb-4'>Участники чата</p>
            {props.members.map((item) => {
                return (
                    <div
                        className='p-2 bg-slate-100 text-center rounded-md mb-4 shadow-md'
                        key={item.id}
                    >
                        {item.name}
                    </div>
                );
            })}
            <div
                className='p-2 bg-slate-100 text-center rounded-md mb-4 shadow-md'
                onClick={() => {
                    sessionStorage.clear();
                    localStorage.clear();
                }}
            >
                clear
            </div>
        </div>
    );
}