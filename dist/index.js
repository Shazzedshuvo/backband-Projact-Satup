import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send('Hello World!');
});
app.use(cors());
export default app;
//# sourceMappingURL=index.js.map