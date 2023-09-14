import {Todo} from "../schema/Todo";
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
    return Todo.find({});
}

export const deleteDataByID = async(id: string): Promise<boolean> => {
       const data = await Todo.deleteOne({"todo_id": id})
       return data.deletedCount != 0;
}

