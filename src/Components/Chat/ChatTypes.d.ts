export declare type ChatProps = {}

export declare type UserType = {
    name: string;
    update: string;
}

export declare type UserInfoProps = {
    user: UserType;
}

export declare type Message = {
    text: string;
    create: string;
    user: string;
}

export declare type MessagesProps = {
    content: Array<Message>;
}

export declare type MembersProps = {
    members: Array<string>;
}
