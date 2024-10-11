const express = require("express");
const {
    addIncome,
    addExpense,
    getAllIncomes,
    getAllExpenses,
    deleteIncome,
    deleteExpense,
} = require("../controllers/FinanceController");

const router = express.Router();

router.route('/postAllIncomes').post(addIncome);
router.route('/getAllincomes').get(getAllIncomes); 
router.route('/deleteIncome/:id').delete(deleteIncome);
router.route('/postAllExpense').post(addExpense); 
router.route('/getAllExpense').get(getAllExpenses); 
router.route('/deleteExpense/:id').delete(deleteExpense);

module.exports = router;
