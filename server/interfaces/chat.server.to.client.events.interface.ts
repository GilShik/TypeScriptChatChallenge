import { UserMessage} from "../../model/user";

export interface IChatServerToClientEventsHandler {
    sendMessageToClients(userMessage: UserMessage): void;
    userConnected(username: string): void;
    sendUserDisconnected(username: string): void;
}