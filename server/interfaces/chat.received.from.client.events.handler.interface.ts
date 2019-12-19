export interface IChatReceivedFromClientEventsHandler {
    messageReceived(id: string, message: string): void;
}