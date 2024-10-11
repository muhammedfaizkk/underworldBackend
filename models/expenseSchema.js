const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the expense title"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Please enter the amount"],
      min: [0, "Amount must be a positive number"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
