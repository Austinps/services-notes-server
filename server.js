import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import app from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 3500;

dbConnect()
  .then(() => {
    console.info("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
