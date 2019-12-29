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
1. Login to https://consumersa.eu10cf.applicationstudio.cloud.sap/index.html with your username and password.


2. Enter to your workspace by clicking on the Students_Workshop link:

    ![Alt text](README_resources/Enter_Dev_Space.png?raw=true "Enter Dev Space")
3. From the main menu, choose **Terminal, New Terminal**.

    ![Alt text](README_resources/open_new_terminal.png?raw=true "Enter Dev Space")
    - From the terminal, run `cd projects` to go to the projects directory.
    - From the terminal, run `git clone https://github.com/GilShik/TypeScriptChatChallenge.git` to copy the challenge project from github to you workspace.

4. From the main menu, choose **File, Open Workspace**.
    - Choose **TypeScriptChatChallenge** and then **Open**.
    
        ![Alt text](README_resources/open_workspace.png?raw=true "Enter Dev Space")

## Short explanation about the application
This is a Node.js application that uses Express to run HTTP server.

the application built from server side code that runs in the server(Node.js) and client side code that runs in the browser.
**Note:** server folder with the server code and client folder with the client code.

The code is written in TypeScript and complies to JavaScript.  
There is a `package.json` file (npm). Using this file we can run the following commands from the terminal:

 - ```npm install``` - in order to install all the packages the application uses.
 - ```npm run build-project``` - in order to build the JavaScript output code into dist folder and also build and prepare 
 the client JavaScript code to run in the browser.
 - ```npm start``` - in order to run the application.

Run the application with debugging (instead of `npm start`):
-
 - (Optional) Set breakpoints by clicking on the left side of the line numbers in your code editor:
 
      ![Alt text](README_resources/breakpoint.png?raw=true "Enter Dev Space")

 - Open the Debug pane from the left side menu:
 
     ![Alt text](README_resources/Debug_pane.png?raw=true "Enter Dev Space")
 - Click on the Start Debugging button:
 
     ![Alt text](README_resources/Run_Debug.png?raw=true "Enter Dev Space")
    - On the first run you will be asked to Expose and Open a port for the application. Click on the **Expose and Open** button:
 
        ![Alt text](README_resources/Expose_And_Open.png?raw=true "Enter Dev Space")

    - Press Enter on this optional dialog:
    
        ![Alt text](README_resources/Port_Description.png?raw=true "Enter Dev Space")

 - A new tab with your running application will be opened.
 
 - For the next run:
    - Stop your running application from the debug pane.
    - Build the project with your changes with the following command from the terminal: `npm run build-project`
    - Run the application again from the debug pane.
    - Refresh your running application's tab or click again on the **Open in new tab** button.
 
      ![Alt text](README_resources/OpenTab.png?raw=true "Enter Dev Space")

  
## Challenge
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
 