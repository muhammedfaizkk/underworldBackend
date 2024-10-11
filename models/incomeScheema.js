const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the income name"],
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

module.exports = mongoose.model("Income", incomeSchema);
