import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  paths: {
    public: path.join(__dirname, "../public"),
    uploads: path.join(__dirname, "../../uploads"),
  },
  bodyParser: {
    extended: true,
  },
  cookieOptions: {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  },
  //   corsOptions: {
  //     credentials: true,
  //     origin: ["http://localhost:3000", "http://localhost:3000"],
  //   },
};
