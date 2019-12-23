export interface IChatReceivedFromClientEventsHandler {
    messageReceived(socketId: string, message: string): void;
    userConnected(id:string, username: string): void;
    userDisconnected(id: string): void;
}