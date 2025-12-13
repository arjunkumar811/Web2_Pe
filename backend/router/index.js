const express = require("express");


const router = express.Router();

router.post("/user", userRouter);

module.exports = router;
