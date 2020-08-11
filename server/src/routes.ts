import express from "express";
import ClassesControler from "./controllers/ClassesControllers";
import ConnectionsControles from "./controllers/ConnectionControllers";
const classescControler = new ClassesControler();
const connectionsControles = new ConnectionsControles();

const routes = express.Router();
routes.get("/classes", classescControler.index);
routes.post("/classes", classescControler.create);
routes.get("/connections", connectionsControles.index);
routes.post("/connections", connectionsControles.create);

export default routes;
