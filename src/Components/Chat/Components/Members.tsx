import React from "react";
import {MembersProps} from "../ChatTypes";

export default function Members(props: MembersProps) {
    return (
        <div>
            {props.members.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    );
}