import  {Schema,  model} from "mongoose"

 const todoSchema = new Schema({
    name: {type: String, require: true},
    task : {type: String, require: true},
})

export const Todo = model('Todo', todoSchema)