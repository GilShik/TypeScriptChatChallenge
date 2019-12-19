
export class User {
    constructor(public Name: string) {}
}

export class UserMessage {
    constructor(public User: User, public Message: string, public Timestamp: number) {}
}