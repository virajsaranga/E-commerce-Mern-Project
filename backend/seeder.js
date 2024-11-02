import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors"; // For colored console output
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config(); // Load environment variables

connectDB(); // Connect to the database

const importData = async () => {
  try {
    await Order.deleteMany(); // Clear existing orders
    await Product.deleteMany(); // Clear existing products
    await User.deleteMany(); // Clear existing users

    // Insert new users and get the created users
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id; // Assuming the first user is the admin

    // Map sample products to include the admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts); // Insert sample products

    console.log("Data Imported!".green.inverse); // Log success message
    process.exit(); // Exit the process
  } catch (error) {
    console.error(`${error}`.red.inverse); // Log error message
    process.exit(1); // Exit with error code
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany(); // Clear existing orders
    await Product.deleteMany(); // Clear existing products
    await User.deleteMany(); // Clear existing users

    console.log("Data Destroyed!".red.inverse); // Log success message
    process.exit(); // Exit the process
  } catch (error) {
    console.error(`${error}`.red.inverse); // Log error message
    process.exit(1); // Exit with error code
  }
};

// Check command line arguments to determine action
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
