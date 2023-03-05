const asyncHandler = require('express-async-handler')

const Goal = require('../Models/goalModel')

// Get goal
//Route : GET api/goals
const getGoals = asyncHandler(async(req,res) =>{
   const goals = await Goal.find()

   res.status(200).json(goals)
})



// Set goal
//Route : POST api/goals
const setGoal = asyncHandler(async(req,res) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await  Goal.create({
        text : req.body.text
    }
    )

    res.status(200).json(goal)
})


// Update goal
//Route : PUT api/goals/:id
const updateGoal = asyncHandler(async(req,res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,
        req.body ,
        {new : true
        })

    res.status(200).json(updatedGoal)
})


// Delete goal
//Route : DELETE api/goals/:id
const deleteGoals = asyncHandler(async(req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
    }
    const toDeleteGoal = await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getGoals ,
    setGoal , 
    updateGoal,
    deleteGoals
}