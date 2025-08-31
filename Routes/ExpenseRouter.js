console.log("ExpenseRouter loaded ✅");

const { addExpenses, fetchExpenses, deleteExpenses } = require('../Controllers/ExpenseController'); 
const router = require('express').Router();


// FETCH ALL THE EXPENSES OF THE USER BASED ON USER_ID
router.get("/", fetchExpenses);

// Add expenses 
router.post("/", addExpenses);

// Delete expense
router.delete("/:expenseId", deleteExpenses);

module.exports = router;
