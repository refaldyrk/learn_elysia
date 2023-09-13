import { Elysia } from "elysia";
import {healthCheck} from "./controller/health-check";
import {todoController} from "./controller/Todo";
import {mongoConnect} from "./helper/mongo";
import swagger from "@elysiajs/swagger";

//Mongo Connect
mongoConnect()

const app = new Elysia()
    .use(healthCheck)
    .use(todoController)
    .use(swagger())
    .get("/", () => "Hello Elysia")
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
