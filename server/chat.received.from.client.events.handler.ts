import {User, UserMessage} from "../model/user";
import {IChatReceivedFromClientEventsHandler} from "./interfaces/chat.received.from.client.events.handler.interface";
import {IChatServerToClientEventsHandler} from "./interfaces/chat.server.to.client.events.interface";
import {ChatUsersService} from "./chat.users.service";

export class ChatReceivedFromClientEvents implements IChatReceivedFromClientEventsHandler {

    //==========================================================================================
    // this class responsible for handling chat events
    //==========================================================================================

    constructor(private chatUsersService:ChatUsersService, private chatServerToClientEventsHandler: IChatServerToClientEventsHandler) {}

    messageReceived(id: string, message: string) {
        //send the message to all clients - with User anonymous - need to send the message with the user who wrote the message
        this.chatServerToClientEventsHandler.sendMessageToClients(new UserMessage(new User("anonymous"), message, Date.now()));
    }

    userConnected(id:string, usernameConnected:string) {
        //send user connected message to all clients
        this.chatServerToClientEventsHandler.userConnected(usernameConnected);
    }

    userDisconnected(id: string) {
        //called when user has disconnected from the Chat

    }
}