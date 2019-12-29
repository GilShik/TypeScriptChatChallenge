# type-script-group-chat
## Description
Creating a group chat room, using TypeScript, Node.js & Socket.io
<br/>
<br/>

![Alt text](README_resources/Nodejs_Chat_Demo.png?raw=true "Node.js Chat Demo")


<br/>

## About the Node modules:
**[Express](https://expressjs.com)** - Express is lightweight web application framework for Node.js. For this simple group chat, it is not necessary to use Express, but if you are planning to continue the development, this is a "nice o have".  

**[Socket.io](https://socket.io)** - Socket.io is the key module in this tutorial which enables the realtime communication between the clients and the server.
for more info and documentation go to [socket.io](https://socket.io).

<br/>

## Credits
**This exercise is based on the example supplied by socket.io:**  
 https://github.com/socketio/chat-example

<br/>

## Prerequisites
In order to develop and run this application the following should be installed: 
 - Node
 - NPM
 - TypeScript
 
I recommend Intellij Idea IDE or VS Code in order to develop and run the application but you can use you own IDE.

 

## Short explanation about the application
This is a Node.js application that uses Express to run HTTP server.
The application built from server side code that runs in the server(Node.js) and client side code that runs in the browser.  
**Note:** server folder with the server code and client folder with the client code.

The code is written in TypeScript and complies to JavaScript.  
There is a `package.json` file (npm). Using this file we can run the following commands:
 - ```npm install``` - in order to install all the packages the application uses.
 - ```npm run build-project``` - in order to build the JavaScript output code into dist folder and also build and prepare 
 the client JavaScript code to run in the browser.
 - ```npm start``` - in order to run the application.

## Challenges
As is, a user can type a message, yet the message is not sent in the group chat.

 We would like to add the following features:

### First challenge
 - Show the message that was sent in the group chat.  
 **(Server already implemented, only Client side change needed)**.
 - Show which user has connected / joined to the chat.   
 **(Server already implemented, only Client side change needed)**.
 
### Second challenge
 - Show the user who sent the message next to the message from the first challenge.  
 **(both Server and Client side changes needed, UI implementation already include just use it)**.
 - Show which user has disconnected/left from the chat.  
 **(both Server and Client side changes needed, UI implementation already include just use it)**.
 
 ### Third challenge
 - Show the number of users connected to the chat.  
 **(both Server and Client side changes needed, UI implementation already include just use it)**.
 
 ### Fourth challenge
 - Show which user is typing... (and of course when they have stopped).  
 **(both Server and Client side changes needed)**.
 - Show a list of the connected users.  
 **(both Server and Client side (including UI - html) changes needed)**.
 