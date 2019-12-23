import {UserMessage} from "../../model/user";

export interface IChatEventsHandler {
    messageArrived(fromUser: UserMessage): void;
    userConnected(username: string): void;
}