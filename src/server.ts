import app from "./app.js";
import connectDB from "./config/db.js";
import { env } from "./config/env.js";

connectDB();

const PORT = env.PORT|| "8000";

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
