// getting-started.js
import mongoose from "mongoose";
import app from "./index.js";
const PORT = process.env.PORT || 4000;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
//# sourceMappingURL=sarver.js.map
