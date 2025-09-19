import express from "express";
import { createTransaction, getAllTransactions, updateTransaction, deleteTransaction, getOneTransaction, updateTransactionPartial } from "../controllers/transactionController.js";
import {verifyJWT} from "../middlewares/jwtverify.js";

const router = express.Router();

router.use(verifyJWT); // protect all routes

router.post("/", createTransaction);
router.get("/", getAllTransactions);
router.get("/:id", getOneTransaction);
router.put("/:id", updateTransaction);
router.patch("/:id", updateTransactionPartial);
router.delete("/:id", deleteTransaction);

export default router;