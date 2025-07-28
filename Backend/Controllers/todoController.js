let todos = []
let todoCount = 1

export const addTodo = (req, res) =>{
    const {title} = req.body

    if(!title){
        res.status(400).json({"message": "Title is required."})
        return
    }

    const newTodo = {id: todoCount++, title: title, completed: false}

    todos.push(newTodo)
    res.status(201).json({"message": "Todo added successfully.", "todo": newTodo})
}

export const getTodos = (req, res) =>{
    res.status(200).json({"todos": todos, "message": "Todos fetched successfully."})
}

export const deleteTodo = (req, res) =>{
    const {id} = req.params
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id))

    if(todoIndex === -1){
        res.status(404).json({"message": "Todo not found."})
        return
    }
    else{
        delete todos[todoIndex]
        res.status(200).json({"message": "Todo deleted successfully.", "todos": todos})
    }
}

export const updateTodo = (req, res) =>{
    const {id} = req.params  
    const {title, completed} = req.body 
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id))

    if(todoIndex === -1){
        res.status(404).json({"message": "Todo not found."})
        return
    }
    if(title){
        todos[todoIndex].title = title
        todos[todoIndex].completed = completed
    }
    return res.status(200).json({"message": "Todo updated successfully.", "todo": todos[todoIndex]});
}
