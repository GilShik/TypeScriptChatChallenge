import { UserMessage} from "../../model/user";

export interface IChatServerToClientEventsHandler {

    sendMessageToClients(userMessage: UserMessage): void;
}