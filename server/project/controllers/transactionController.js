import pool from "../../db.js";

// Create Transaction
export const createTransaction = async (req, res) => {
    const { type, category, amount, note } = req.body;
    const userId = req.user.id; // from JWT middleware

    // Check if data is inserted
    if (!type || !category || !amount) {
        return res.status(400).json({ message: "Type, category and amount are required" });
    }
    
    // Check transaction type
    if (!["income", "expense", "saving"].includes(type)) {
        return res.status(400).json({ message: "Invalid transaction type" });
    }

    if(!amount > 0){
        return res.status(400).json({ message: "Please enter the amount" });
    }

    try {
        const [result] = await pool.query(
            "INSERT INTO transactions (user_id, type, category, amount, note) VALUES (?, ?, ?, ?, ?)",
            [userId, type, category, amount, note]
        );

        res.status(201).json({ message: "Transaction added", transactionId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all transactions for user
export const getAllTransactions = async (req, res) => {
    const userId = req.user.id;

    try {
        const [rows] = await pool.query("SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC", [userId]);
    
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a transaction of user
export const getOneTransaction = async (req, res) => {
  const userId = req.user.id;
  const transactionId = req.params.id;

  const [rows] = await pool.query(
    "SELECT * FROM transactions WHERE id=? AND user_id=?",
    [transactionId, userId]
  );

  if (!rows.length) return res.status(404).json({ message: "Transaction not found" });

  res.json(rows[0]);
};

// Update all details from a transaction [put]

export const updateTransaction = async (req, res) => {
    const { id } = req.params;
    const { type, category, amount, note } = req.body;
    const userId = req.user.id;

    try {
        await pool.query(
            "UPDATE transactions SET type=?, category=?, amount=?, note=? WHERE id=? AND user_id=?",
            [type, category, amount, note, id, userId]
        );

        res.json({ message: "Transaction updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a specific part of transaction [patch]

export const updateTransactionPartial = async (req, res) => {
  const userId = req.user.id;
  const transactionId = req.params.id;
  const { type, category, amount, note } = req.body;

  const fields = [];
  const values = [];

  if (type) {
    if (!["income","expense","saving"].includes(type)) return res.status(400).json({ message: "Invalid type" });
    fields.push("type=?"); values.push(type);
  }
  if (category) { fields.push("category=?"); values.push(category); }
  if (amount) { fields.push("amount=?"); values.push(amount); }
  if (note) { fields.push("note=?"); values.push(note); }

  if (!fields.length) return res.status(400).json({ message: "Nothing to update" });

  values.push(transactionId, userId);

  const [result] = await pool.query(
    `UPDATE transactions SET ${fields.join(", ")} WHERE id=? AND user_id=?`,
    values
  );

  if (result.affectedRows === 0) return res.status(404).json({ message: "Transaction not found" });
  res.json({ message: "Transaction updated successfully" });
};

// Delete a transaction

export const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        await pool.query("DELETE FROM transactions WHERE id=? AND user_id=?", [id, userId]);
        res.json({ message: "Transaction deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Summary

export const summary = async (req, res) => {
    const userId = req.user.id;

    try {
        // const user = await pool.query("SELECT * FROM transactions WHERE user_id = ?", [userId]);
        const [expense] = await pool.query(
            "SELECT SUM(CASE WHEN type = ? THEN amount ELSE 0 END) AS totalIncome, SUM(CASE WHEN type = ? THEN amount ELSE 0 END) AS totalExpense, SUM(CASE WHEN type = ? THEN amount ELSE 0 END) AS totalSaving FROM transactions WHERE user_id=?",
            ["income", "expense", "saving", userId]
        )

        // const totalIncome = expense[0].totalIncome;
        // const totalExpense = expense[0]?.totalExpense;
        // const totalSaving = expense[0]?.totalSaving;
        res.json({ expense });
    } catch (error) {
        res.status(500).json({ error});
    }
}

