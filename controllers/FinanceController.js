const mongoose = require("mongoose");
const Income = require('../models/incomeScheema'); 
const Expense = require('../models/expenseSchema'); 

// Add Income
exports.addIncome = async (req, res) => {
    console.log('Adding Income');
    
    const { name, amount, date } = req.body; // Correctly extracting fields from req.body
    console.log(name, amount);
  
    try {
        const income = await Income.create({ name, amount, date });

        res.status(201).json({
            success: true,
            message: "Income added successfully",
            income,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Add Expense
exports.addExpense = async (req, res) => {
    console.log('Adding Expense');
    
    const { name, amount, date } = req.body; // Correctly extracting title instead of name
    console.log(name, amount);
    const title = name;
    try {
        const expense = await Expense.create({ title, amount, date });

        res.status(201).json({
            success: true,
            message: "Expense added successfully",
            expense,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Incomes
exports.getAllIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();

        res.status(200).json({
            success: true,
            message: "Incomes retrieved successfully",
            incomes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();

        res.status(200).json({
            success: true,
            message: "Expenses retrieved successfully",
            expenses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Income
exports.deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;

        const income = await Income.findByIdAndDelete(id);
        if (!income) {
            return res.status(404).json({
                success: false,
                message: "Income not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Income deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;

        const expense = await Expense.findByIdAndDelete(id);
        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Expense deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
