import express, { Request, Response, NextFunction } from "express";
import squeezeRoute from "./routes/sequeeze.route";
import { initializeDataSource } from "./data-source";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger.config";

const app = express();

app.use(express.json());
app.use("/api/v1/squeeze", squeezeRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ status_code: 500, message: "Internal Server Error" });
});

const startServer = async () => {
  try {
    await initializeDataSource();
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  } catch (err) {
    console.error("Failed to start application:", err);
  }
};

startServer();

export { app };
