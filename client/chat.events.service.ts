import * as io from 'socket.io-client';
import {IChatEventsHandler} from "./interfaces/chat.events.handler.interface";
import {ChatServerToClientEvent} from "../model/enums/chat.server.to.client.event";
import {ChatClientToServerEvent} from "../model/enums/chat.client.to.server.event";

export class ChatEventsService {

    //==========================================================================================
    // this class responsible for communicating with the server, listen to events
    // and sending events
    //==========================================================================================

    private socket = io();
    private chatServiceSubscribers: IChatEventsHandler[] = [];

    constructor() {
        this.registerToEvents();
    }

    public connectToChat(username: string) {
        //this will send a event/message USER_CONNECTED to the server
        this.socket.emit(ChatClientToServerEvent.USER_CONNECTED, username);
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

        this.socket.on(ChatServerToClientEvent.USER_CONNECTED, (usernameThatJustConnected) => { //() => {} is a nameless function
            this.chatServiceSubscribers.forEach((subscriber: IChatEventsHandler) => {
                subscriber.userConnected(usernameThatJustConnected.trim());
            });
        });

        this.socket.on(ChatServerToClientEvent.USER_DISCONNECTED, (usernameThatJustDisconnected) => { //() => {} is a nameless function
            this.chatServiceSubscribers.forEach((subscriber: IChatEventsHandler) => {
                //should call the subscriber ??
            });
        });
    }

    public sendMessage(username:string, message: string): void {
        //sending event for sending a new message to the chat
        this.socket.emit(ChatClientToServerEvent.MESSAGE_TO_SERVER , message);
    }
}