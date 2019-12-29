import {App} from "./app";

const port = parseInt(process.env.PORT)|| 3001;
const app: App = new App(port);





app.prepareServer();
app.listen();
