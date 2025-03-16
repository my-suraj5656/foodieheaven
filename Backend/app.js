import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./Database/db.js";
import { errorMiddleware } from "./Error/error.js";
import reservationrouter from "./Routes/reservationroute.js";

const app = express();
dotenv.config({ path: "./Config/config.env" });

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true); // Allow all origins dynamically
    },
    credentials: true, // Allow cookies and tokens
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationrouter);

dbconnection();
app.use(errorMiddleware);
export default app;
