import {ChatEventsService} from "./chat.events.service";
import {ChatController} from "./chat.controller";
import {ChatUI} from "./chat.ui";

//Model/Service
const chatEventService = new ChatEventsService();

//View/UI
const chatUI = new ChatUI();

//Controller
const chatController = new ChatController(chatEventService, chatUI);