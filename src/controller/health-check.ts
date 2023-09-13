import { Elysia } from "elysia";

export const healthCheck = new Elysia({prefix: "api/v1"})
    .get("/", ({set}) => {
        set.status = 200;
        return {
            "message": "everything okai"
        }
    })