const express = require("express");
const cors = require("cors");

const mainRouter = require("./router/index");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

// api/v1/user
// api/v1/transaction
// api/v1/withdraw

// api/v1/user
// api/v1/transaction
// api/v1/withdraw


app.listen(3000);