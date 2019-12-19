import * as io from 'socket.io-client';
import {IChatEventsHandler} from "./interfaces/chat.events.handler.interface";
import {ChatServerToClientEvent} from "../model/enums/chat.server.to.client.event";
import {ChatClientToServerEvent} from "../model/enums/chat.client.to.server.event";

export class ChatEventsService {

    private socket = io();
    private chatServiceSubscribers: IChatEventsHandler[] = [];

    constructor() {
        this.registerToEvents();
    }

    public connectToChat(username: string) {
    }

    public subscribeToChatEvents(chatAction: IChatEventsHandler) {
        this.chatServiceSubscribers.push(chatAction);
    }

    private registerToEvents() {
        // register to socket io events coming from the server

        this.socket.on(ChatServerToClientEvent.MESSAGE_TO_CLIENTS , (userMessage) => {
            this.chatServiceSubscribers.forEach((subscriber: IChatEventsHandler) => {
                subscriber.messageArrived(userMessage);
            });
        });
    }

    public sendMessage(username:string, message: string): void {
        //sending event for sending a new message to the chat
        this.socket.emit(ChatClientToServerEvent.MESSAGE_TO_SERVER , message);
    }
}