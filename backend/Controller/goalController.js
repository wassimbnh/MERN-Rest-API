const asyncHandler = require('express-async-handler')


// Get goal
//Route : GET api/goals
const getGoals = asyncHandler(async(req,res) =>{
   res.status(200).json({message : 'Get goals'})
})



// Set goal
//Route : POST api/goals
const setGoal = asyncHandler(async(req,res) =>{
    res.status(200).json({msg : 'Goals'})
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message : 'set goal'})
})


// Update goal
//Route : PUT api/goals/:id
const updateGoal = asyncHandler(async(req,res) =>{
    res.status(200).json({msg : `Update Goal  ${req.params.id}`})
})


// Delete goal
//Route : DELETE api/goals/:id
const deleteGoals = asyncHandler(async(req,res) =>{
    res.status(200).json({msg :  `Delete Goal  ${req.params.id}`})
})

module.exports = {
    getGoals ,
    setGoal , 
    updateGoal,
    deleteGoals
}