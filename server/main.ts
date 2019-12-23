import {App} from "./app";

const port = parseInt(process.env.PORT)|| 3000;
const app: App = new App(port);





app.prepareServer();
app.listen();