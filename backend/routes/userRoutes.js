const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUserById, getUsers, deleteUser } = require("../controllers/userController");
const router = express.Router();


//User management Routes
router.get("/", protect, adminOnly, getUsers);  //Get all users (Admin only) 
router.get("/:id",protect, getUserById); //Get specific user
//router.delete("/:id", protect, adminOnly, deleteUser); //Delete user (Admin only)

module.exports= router;