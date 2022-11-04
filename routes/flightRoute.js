const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)
router.post("/bookflight", controller.bookFlight)
router.get("/flights", controller.allFlight)
router.get("/flights/:id", controller.getFlight)
router.put("/editflight", controller.editFlight)
router.delete("/delete", controller.deleteFlight)

module.exports = router;

