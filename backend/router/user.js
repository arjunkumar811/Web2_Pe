const express = require("express");
const userRouter = require("./user")
const router = express.Router();

router.use("/user", userRouter);

module.exports = router;

router.get("signup", (req, res) {
    const username = req.body.username;
    const password = req.body.password;

   
})

