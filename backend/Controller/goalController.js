


// Get goal
//Route : GET api/goals
const getGoals = (req,res) =>{
    res.status(200).json({msg : 'Goals'})
}



// Set goal
//Route : POST api/goals
const setGoal = (req,res) =>{
    res.status(200).json({msg : 'Set Goal'})
}


// Update goal
//Route : PUT api/goals/:id
const updateGoal = (req,res) =>{
    res.status(200).json({msg : `Update Goal  ${req.params.id}`})
}


// Delete goal
//Route : DELETE api/goals/:id
const deleteGoals = (req,res) =>{
    res.status(200).json({msg :  `Delete Goal  ${req.params.id}`})
}

module.exports = {
    getGoals ,
    setGoal , 
    updateGoal,
    deleteGoals
}