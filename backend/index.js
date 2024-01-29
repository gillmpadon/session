import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.listen(3000, () => {
  console.log("listening on 3000");
});
app.get("/okayna", (req, res) => {
  try {
    return res.status(200).send({ message: "okayna" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e.message });
  }
});
