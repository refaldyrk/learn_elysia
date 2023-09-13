import {Todo}  from "../schema/Todo";

interface BodyRequest {
    name: string;
    task: string;
}

export const saveData = async (body: BodyRequest) => {
    await new Todo({
        name: body.name,
        task: body.task,
    }).save()
}

