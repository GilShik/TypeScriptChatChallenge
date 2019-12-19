import * as $ from "jquery";
import {IChatUIEventsHandler} from "./interfaces/chat.ui.events.handler.interface";
import {User, UserMessage} from "../model/user";

export class ChatUI {

    private chatUIEventsSubscribers: IChatUIEventsHandler[] = [];
    private typingTimer: number;
    private static DONE_TYPING_INTERVAL = 1000;

    constructor() {
        this.registerToSendMessage();
        this.registerToKeyDown();
        this.registerToKeyUp();
    }

    public subscribeToUIEvents(chatUIEventsHandler: IChatUIEventsHandler) {
        this.chatUIEventsSubscribers.push(chatUIEventsHandler);
    }

    public login() {
        let username = prompt("Please enter your username", "El Professor");
        if (!username) {
            username = "Anonymous_User";
        }

        this.chatUIEventsSubscribers.forEach(chatUIEventsHandler => {
            chatUIEventsHandler.onUserConnectToChat(username);
        });

        //Let the user see their nickname:
        $("#logged_as_info").html(`<h2>Logged as: <strong>` + username + `</strong></h2>`);
    }

    private registerToKeyDown() {
        $('#message_form_input').on("keydown", (e) => {
            //log 'is typing...' only if the key is printable
            if (this.isPrintableKey(e)) {
                this.chatUIEventsSubscribers.forEach(chatUIEventsHandler => {

                });
            }
        });
    }

    private registerToKeyUp() {
        $('#message_form_input').on("keyup", (e) => {
            if (this.isPrintableKey(e)) {
                this.chatUIEventsSubscribers.forEach(chatUIEventsHandler => {

                });
            }
        });
    }

    private registerToSendMessage() {
        $('form').submit(() => {
            //verify that the message is not empty / contains only white spaces:
            let user_message = ($('#message_form_input').val()).toString().replace(/\s/g, "");
            if (user_message === "") {
                return false; //return false = don't refresh page.
            }

            const message = $('#message_form_input').val().toString();

            this.chatUIEventsSubscribers.forEach(chatUIEventsHandler => {
                chatUIEventsHandler.onSendMessage(message);
            });

            //make message box blank again:
            $('#message_form_input').val('');
            return false; //return false = don't refresh page.
        });
    }

    private isPrintableKey(keyEvent) {
        if (keyEvent.key.length === 1) return true;
        return false;
    }

    public showUserEndTyping(username: string): void {

        //start count down (again?) to disappear the is_typing notification.
        this.typingTimer = window.setTimeout(() => {
            $('#username_is_typing_board').children('#' + username + 'isTypingId').html('');
        }, ChatUI.DONE_TYPING_INTERVAL);
    }

    public showUserStartTyping(username: string): void {
        //new pressing of a key, don't want to remove is_typing notification from previous keyup event.
        clearTimeout(this.typingTimer);

        //check if the username that is typing has a li in the board of is_typing. if not, add one.
        if (!$('#username_is_typing_board').children('#' + username + 'isTypingId').length) {
            //add a is_typing div to the is_typing board for this user:
            $('#username_is_typing_board').append('<div id=' + username + 'isTypingId></div>');
        }

        const isTypingMessage = '<li><strong>' + username + '</strong> is typing...</li>';
        //if this is the first time typing in the current typing session, edit the notification:
        $('#username_is_typing_board').children('#' + username + 'isTypingId').html(isTypingMessage);
    }

    public showUsernameHasLeftChat(username: string) {
        const notification_id = `${username}_left_the_chat`;
        const left_log = `<li id=` + notification_id + `><h3>🙃 <strong>` + username + `</strong> has left the chat!</h3></li>`;

        //update the logs board:
        $('#logs_board').append(left_log);

        //after 10 seconds, remove the notification:
        setTimeout((id) => {
            $('#logs_board').children('#' + id).remove();
        }, 10000, notification_id);

        //remove from username_is_typing_board the user's div
        $('#username_is_typing_board').children('#' + username + 'isTypingId').remove();
    }

    public showUsernameHasJoinTheChat(username: string) {
        const notification_id = `${username}_joined_the_chat`;
        const join_log = `<li id=` + notification_id + `><h3>❣️ <strong>` + username + `</strong> has joined the chat!</h3></li>`;

        //update the logs board:
        $('#logs_board').append(join_log);

        //after 10 seconds, remove the notification of the logging:
        setTimeout((id) => {
            $('#logs_board').children('#' + id).remove();
        }, 10000, notification_id);

        //add to username_is_typing_board the user's div
        if(!$('#username_is_typing_board').has('<div id=' + username + 'isTypingId></div>')) {
            $('#username_is_typing_board').append('<div id=' + username + 'isTypingId></div>');
        }
    }

    public showHowManyUsersConnected(count: number) {
        $('#num_users_online_number').html('<h3>' + count + ' Users Online</h3>');
    }

    public showMessageInChat(messageFromUser: UserMessage, currentUser: User) {
        //set different backgroud for the user that sent the message:
        let bkg = (messageFromUser.User.Name === currentUser.Name) ? "#ccebff" : "#ffffff";
        const userWithMessageUI = '<li>' +  new Date(messageFromUser.Timestamp).toLocaleString() + ' <strong>' + messageFromUser.User.Name + '</strong>: ' + messageFromUser.Message + '</li>';
        let msg_with_style = `<div style="background: ` + bkg + `">` + userWithMessageUI + `</div>`;
        $('#messages').append(msg_with_style);
        window.scrollTo(0, document.body.scrollHeight);
    }

}