const express = require("express");
const router = express.Router();
const { deleteUser, getUser } = require("../controllers/userController");

const Auth = require("../middlewear/requireAuth");
router.use(Auth);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

module.exports = router;
