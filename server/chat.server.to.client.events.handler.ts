import * as io from "socket.io";
import {UserMessage} from "../model/user";
import {IChatServerToClientEventsHandler} from "./interfaces/chat.server.to.client.events.interface";
import {ChatServerToClientEvent} from "../model/enums/chat.server.to.client.event";

export class ChatServerToClientEventsHandler implements IChatServerToClientEventsHandler {

    //==========================================================================================
    // this class responsible for the outgoing messages/events from the server to the clients
    // using socket.io
    //==========================================================================================

    constructor(private io: io.Server){}

    sendMessageToClients(userMessage: UserMessage) {
        this.io.emit(ChatServerToClientEvent.MESSAGE_TO_CLIENTS, userMessage);
    }

    userConnected(username: string) {
        this.io.emit(ChatServerToClientEvent.USER_CONNECTED, username);
    }

    sendUserDisconnected(username: string) {
        this.io.emit(ChatServerToClientEvent.USER_DISCONNECTED, username);
    }
}