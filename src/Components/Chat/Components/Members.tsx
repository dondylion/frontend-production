import React from "react";
import {MembersProps} from "../ChatTypes";

export default function Members(props: MembersProps) {
    return (
        <div className='h-full p-4 text-center flex flex-col'>
            <p className='hidden lg:block text-2xl font-semibold mb-4'>
                Участники чата
            </p>
            {props.members.map((item) => {
                return (
                    <div
                        className='bg-slate-100 text-center rounded-md shadow-md p-2 mb-4 ml-0'
                        key={item.id}
                    >
                        {item.name}
                    </div>
                );
            })}
        </div>
    );
}