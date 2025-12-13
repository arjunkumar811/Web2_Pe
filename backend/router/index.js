const express = require("express");


const router = express.Router();

router.post("/signup", userRouter);

module.exports = router;
