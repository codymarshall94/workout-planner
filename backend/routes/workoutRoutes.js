const router = require('express').Router();
const { getWorkouts, postWorkout } = require('../controllers/WorkoutController');

router.get('/workout', getWorkouts);

router.post('/workout', postWorkout);

module.exports = router;