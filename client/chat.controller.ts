import { ChatEventsService } from "./chat.events.service";
import { User , UserMessage} from "../model/user";
import {ChatUI} from "./chat.ui";
import {IChatUIEventsHandler} from "./interfaces/chat.ui.events.handler.interface";
import {IChatEventsHandler} from "./interfaces/chat.events.handler.interface";

export class ChatController implements IChatEventsHandler, IChatUIEventsHandler {
    private user: User;

    constructor(private chatEventsService: ChatEventsService, private chatUI: ChatUI) {
        // subscribe to events coming from server
        this.chatEventsService.subscribeToChatEvents(this);
        // subscribe to events coming the from the UI
        this.chatUI.subscribeToUIEvents(this);
        this.chatUI.login();
    }

    //<editor-fold desc="Chat Events from Server Implementation (IChatEventsHandler)">
    // functions callbacks for getting events/messages from the server

    messageArrived(fromUser: UserMessage): void {
        this.chatUI.showMessageInChat(fromUser, this.user);
    }

    //</editor-fold>

    //<editor-fold desc="Chat UI Events (IChatUIEventsHandler)">
    // functions callbacks for getting UI events like the user sending a message

    onSendMessage(message: string) {
        this.chatEventsService.sendMessage(this.user?.Name, message);
    }

    onUserConnectToChat(username: string) {
        this.user = new User(username);
        this.chatEventsService.connectToChat(username);
    }

    //</editor-fold>
}