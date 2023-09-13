import  {Schema,  model} from "mongoose"

 const todoSchema = new Schema({
     todo_id :{type: String, require: true},
     name: {type: String, require: true},
     task : {type: String, require: true},
})

export const Todo = model('Todo', todoSchema)