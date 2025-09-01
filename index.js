const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const ExpenseRouter = require('./Routes/ExpenseRouter');
const ensureAuthenticated = require('./Middlewares/Auth');



require("dotenv").config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
require('./Models/db');
const PORT = process.env.PORT || 8080;


app.use("/api/auth", require("./Routes/AuthRouter")); //newly added

app.use(
  cors({
    origin: [
      "http://localhost:3000", // for local dev
      "https://expense-tracker-frontend-dkm9.vercel.app" // for production frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req,res) => {
    res.send({
        activeStatus: true,
        error: false
    })
})

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
//app.use(cors()); add this

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/expenses',ensureAuthenticated, ExpenseRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})