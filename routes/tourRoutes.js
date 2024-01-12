const express = require('express');
const fs = require('fs');

const router = express.Router();

const tourController = require('../controllers/tourController');

router.route('/').get(tourController.getAllTours).post(tourController.getTour);
router
  .route('/:id')
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
