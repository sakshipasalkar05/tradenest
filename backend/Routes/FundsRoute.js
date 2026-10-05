const {
  getFunds,
  addFunds,
  withdrawFunds,
} = require("../controllers/FundsController");
const { requireAuth } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/", requireAuth, getFunds);
router.post("/add", requireAuth, addFunds);
router.post("/withdraw", requireAuth, withdrawFunds);

module.exports = router;