import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import squeezeRoute from "./routes/sequeeze.route";
import { initializeDataSource } from "./data-source";

const app = express();

app.use(bodyParser.json());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.use("/api/v1/squeeze", squeezeRoute);

initializeDataSource()
  .then(() => {
    console.log("Database connection established.");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Failed to start application:", err);
  });

export { app };
