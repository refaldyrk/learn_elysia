import {Elysia} from "elysia";
import {saveData} from "../service/Todo";

export const todoController = new Elysia({prefix: "/api/v1"})
    .post("/todo", async ({set, body}) => {
        // @ts-ignore
        if(body.task == "" || body.task == undefined || body.name == "" || body.name == undefined) {
            set.status = 500;
            return {
                "message": "request invalid"
            }
        }

        // @ts-ignore
        await saveData(body).catch(e => {
            set.status = 500;
            return {
                "message": "error when create data",
                "response": e
            }
        })

        set.status = 200;
        return {
            "message": "success create data",
            "request": body
        }
    });