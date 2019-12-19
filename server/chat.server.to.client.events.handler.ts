import * as io from "socket.io";
import {UserMessage} from "../model/user";
import {IChatServerToClientEventsHandler} from "./interfaces/chat.server.to.client.events.interface";
import {ChatServerToClientEvent} from "../model/enums/chat.server.to.client.event";

export class ChatServerToClientEventsHandler implements IChatServerToClientEventsHandler {

    constructor(private io: io.Server){}

    sendMessageToClients(userMessage: UserMessage) {
        this.io.emit(ChatServerToClientEvent.MESSAGE_TO_CLIENTS, userMessage);
    }
}