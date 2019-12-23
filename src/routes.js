const express = require("express");
const router = express.Router();
const validate = require("express-validation");
const AuthMiddleware = require("./app/middlewares/auth");
const controllers = require("./app/controllers");
const validators = require("./app/validators");
const handle = require("express-async-handler");

router.post(
  "/users",
  validate(validators.User),
  handle(controllers.UserController.store)
);
router.post(
  "/sessions",
  validate(validators.Session),
  handle(controllers.SessionController.store)
);

router.use(AuthMiddleware);

// Add Routes
router.get("/ads", handle(controllers.AdController.index));
router.get("/ads/:id", handle(controllers.AdController.show));
router.post(
  "/ads",
  validate(validators.Ad),
  handle(controllers.AdController.store)
);
router.put(
  "/ads/:id",
  validate(validators.Ad),
  handle(controllers.AdController.update)
);
router.delete("/ads/:id", handle(controllers.AdController.destroy));

// Purchase Routes
router.post("/purchases", handle(controllers.PurchaseController.store));

module.exports = router;
