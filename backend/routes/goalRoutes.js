const express = require('express')
const router = express.Router();
const {getGoals,
    setGoal,
    deleteGoals,
    updateGoal
} = require('../Controller/goalController')


//router.get('/', getGoals);
//router.post('/', setGoal );

router.route('/').get(getGoals).post(setGoal)

//router.put('/:id', deleteGoals);
//router.delete('/:id', updateGoal);

router.route('/:id').delete(deleteGoals).put(updateGoal)



module.exports = router