import {Todo}  from "../schema/Todo";
import {randomUUID} from "crypto";

interface BodyRequest {
    todo_id: string;
    name: string;
    task: string;
}

export const saveData = async (body: BodyRequest) => {
    await new Todo({
        todo_id: randomUUID(),
        name: body.name,
        task: body.task,
    }).save()
}

export const findAAllData = async  () => {
    const allTodo = await Todo.find({})
    return allTodo
}

