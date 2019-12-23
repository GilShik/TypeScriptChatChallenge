import * as express from "express";
import * as path from "path";
import * as io from 'socket.io';

import {IChatReceivedFromClientEventsHandler} from "./interfaces/chat.received.from.client.events.handler.interface";
import {IChatServerToClientEventsHandler} from "./interfaces/chat.server.to.client.events.interface";
import {ChatReceivedFromClientEvents} from "./chat.received.from.client.events.handler";
import {ChatServerToClientEventsHandler} from "./chat.server.to.client.events.handler";
import {ChatUsersService} from "./chat.users.service";
import {ChatClientToServerEvent} from "../model/enums/chat.client.to.server.event";


export class App {

    //==============================================================================================
    // this class responsible for initialize the application including wiring the socket.io
    // events coming from the client.
    // also setting up the http server using express.
    // it uses IChatReceivedFromClientEventsHandler to notify for those client events.
    //==============================================================================================

    private expressApplication: express.Application;
    private chatUsersService: ChatUsersService;
    private chatReceivedFromClientEventsHandler: IChatReceivedFromClientEventsHandler;
    private chatServerToClientEventsHandler: IChatServerToClientEventsHandler;
    private io: io.Server;
    private http;

    constructor(private port: number) {}

    public prepareServer(): void {
        this.expressApplication = express();
        this.expressApplication.get('/', function (req: express.Request, res: express.Response) {
            res.sendFile( path.join(__dirname, '/../', '/index.ts.html'));
        });

        this.expressApplication.use('/client', express.static(path.join(__dirname, '/../', 'client')));
        this.chatUsersService = new ChatUsersService();
        this.http = require('http').Server(this.expressApplication);
        this.io = require('socket.io')(this.http);
        this.chatServerToClientEventsHandler = new ChatServerToClientEventsHandler(this.io);
        this.chatReceivedFromClientEventsHandler = new ChatReceivedFromClientEvents(this.chatUsersService, this.chatServerToClientEventsHandler);
        this.setupIO(this.io);
    }

    public listen(): void {
        this.http.listen(this.port, () => {
            console.log('listening on localhost:' + this.port);
        });
    }

    private setupIO(io: io.Server) {

        //io.on - when connection arrived to the server the listener function will be run,
        // here we are registering for events coming from the client

        io.on('connection', (socket: io.Socket) => {
            //each socket is unique to each client that connects:
            console.log("socket.id: " + socket.id);

            socket.on(ChatClientToServerEvent.MESSAGE_TO_SERVER, args => {
                this.chatReceivedFromClientEventsHandler.messageReceived(socket.id, args);
            });

            socket.on(ChatClientToServerEvent.USER_CONNECTED, args => {
                this.chatReceivedFromClientEventsHandler.userConnected(socket.id, args);
            });

            socket.on(ChatClientToServerEvent.USER_DISCONNECTED, args => {
                // handle disconnected/connection closed
                // think of using the socket.id in order to identify who left the chat
            });
        });
    }

}