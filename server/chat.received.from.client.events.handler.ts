import {User, UserMessage} from "../model/user";
import {IChatReceivedFromClientEventsHandler} from "./interfaces/chat.received.from.client.events.handler.interface";
import {IChatServerToClientEventsHandler} from "./interfaces/chat.server.to.client.events.interface";
import {ChatUsersService} from "./chat.users.service";

export class ChatReceivedFromClientEvents implements IChatReceivedFromClientEventsHandler {

    constructor(private chatUsersService:ChatUsersService, private chatServerToClientEventsHandler: IChatServerToClientEventsHandler) {}

    messageReceived(id: string, message: string) {
        this.chatServerToClientEventsHandler.sendMessageToClients(new UserMessage(new User("anonymous"), message, Date.now()));
    }
}