import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Allow requests from frontend
app.use(cors({ origin: "http://localhost:5173" }));

// Parse JSON bodies
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
