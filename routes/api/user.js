const express = require("express");

const router = express.Router();

//@route   GET api/users/test
//@desc    Test user route
//@access  Private

router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
