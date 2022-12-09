export declare type ChatProps = {}

export declare type UserType = {
    id: number;
    name: string;
    update: string;
}

export declare type Message = {
    text: string;
    create: string;
    user: string;
    userId: number;
    id: number;
}

export declare type MessagesProps = {
    content: Array<Message>;
    currentUser: UserType;
    update: ()=>void;
}

export declare type MembersProps = {
    members: Array<UserType>;
}
