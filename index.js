// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./Routes/AuthRouter');
// const ProductRouter = require('./Routes/ProductRouter');
// const ExpenseRouter = require('./Routes/ExpenseRouter');
// const ensureAuthenticated = require('./Middlewares/Auth');



// require("dotenv").config();
// console.log("JWT_SECRET:", process.env.JWT_SECRET);
// require('./Models/db');
// const PORT = process.env.PORT || 8080;


// app.use("/api/auth", require("./Routes/AuthRouter")); //newly added

// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000", // for local dev
//       "https://expense-tracker-frontend-dkm9.vercel.app" // for production frontend
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.get("/", (req,res) => {
//     res.send({
//         activeStatus: true,
//         error: false
//     })
// })

// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// app.use(express.json());
// //app.use(cors()); add this

// app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);
// app.use('/expenses',ensureAuthenticated, ExpenseRouter);


// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })



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

// ✅ CORS middleware must come first
app.use(
  cors({
    origin: [
      "http://localhost:3000", // local dev
      "https://expense-tracker-frontend-dkm9.vercel.app" // production frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Handle preflight OPTIONS request
app.options("*", cors());

// ✅ Middleware
app.use(express.json());

// ✅ Health check routes
app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

app.get('/ping', (req, res) => {
  res.send('PONG');
});

// ✅ API Routes (after CORS + JSON middleware)
app.use("/api/auth", AuthRouter);
app.use("/api/products", ProductRouter);
app.use("/api/expenses", ensureAuthenticated, ExpenseRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
