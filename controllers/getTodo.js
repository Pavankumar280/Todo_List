//import the models
const Todo = require("../models/todo.js");
exports.getTodo = async (req, res) => {
    try {
        //fetch all todo item form database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            messages:"Entire data is fetched"
        })
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
        
    }
}; 


exports.getTodoById = async (req,res) => {
    try{
        //extract todo item basis in id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        //data for given id not found
        if (!todo) {
            return res.status(400).json({
                success: false,
                message:"No Data Found with given id"
            })
        }

        //data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:"Data successfully fetch"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(400)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}
