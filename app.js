import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { logger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
import rootRouter from "./routes/root.js";
import userRoutes from "./routes/userRoutes.js";
import noteRouter from "./routes/noteRoutes.js";
import throw404 from "./middleware/throw404.js";

const app = express();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", rootRouter);
app.use("/users", userRoutes);
app.use("/notes", noteRouter);

app.all("*", throw404);

app.use(errorHandler);

export default app;
