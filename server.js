const express = require("express");
const app = express();
const { db } = require("./firebase.js");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.post("/inventory", async (req, res) => {
  try {
    const data = req.body;
    console.log(data.name);
    const docRef = await db
      .collection("inventory")
      .doc()
      .set({ name: data.name, class: data.class });

    res.status(201).json({ Message: "Success" });
  } catch (e) {
    console.error("Error:", e);
    res.status(500).json({ Message: "Error" });
  }
});
