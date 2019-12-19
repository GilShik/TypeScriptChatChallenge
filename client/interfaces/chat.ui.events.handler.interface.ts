export interface IChatUIEventsHandler {
    onSendMessage(message: string);
    onUserConnectToChat(username: string);
}