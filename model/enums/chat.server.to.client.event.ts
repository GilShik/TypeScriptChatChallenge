export enum ChatServerToClientEvent {
    MESSAGE_TO_CLIENTS = "addChatMessage(server->clients)",
    USER_CONNECTED = "userConnected",
    USER_DISCONNECTED = "userDisconnected",
    NUMBER_OF_USERS_UPDATED = "updateNumUsersOnline",
}