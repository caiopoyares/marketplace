const express = require("express");
const router = express.Router();

const AuthMiddleware = require("./app/middlewares/auth");

const controllers = require('./app/controllers');

router.post('/users', controllers.UserController.store);
router.post('/sessions', controllers.SessionController.store);

router.use(AuthMiddleware);

// Add Routes
router.get('/ads', controllers.AdController.index)
router.get('/ads/:id', controllers.AdController.show)
router.post('/ads', controllers.AdController.store)
router.put('/ads/:id', controllers.AdController.update)
router.delete('/ads/:id', controllers.AdController.destroy)

// Purchase Routes
router.post('/purchases', controllers.PurchaseController.store)

module.exports = router;