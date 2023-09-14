import {Elysia} from "elysia";
import {saveData, findAAllData, deleteDataByID} from "../service/Todo";

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
    })
    .get("/todo", async function handler({set}) {
        let data;

       data = await findAAllData().catch(e => {
           return {
               "message": e.message
           }
       })

        set.status = 200;
        return {
            message: "success retrieve data",
            data: data
        }
    })
    .delete("/todo/:id", async function handler({params: {id}, set}) {

            const data = await deleteDataByID(id)
            if(!data) {
                set.status = 500;
                return {
                    "message": data
                }
            }
            set.status = 201;
            return {
                "message": data
            }
    })