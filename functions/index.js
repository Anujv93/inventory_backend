/* eslint-disable quotes */
/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const express = require("express");
// const app = express();
// const { db } = require("./firebase.js");
// const PORT = process.env.PORT || 8080;
// const cors = require("cors");
// const functions = require("firebase-functions");

// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

// app.post("/inventory", async (req, res) => {
//   try {
//     const data = req.body;
//     console.log(data.name);
//     await db
//       .collection("inventory")
//       .doc()
//       .set({ name: data.name, class: data.class });

//     res.status(201).json({ Message: "Success" });
//   } catch (e) {
//     console.error("Error:", e);
//     res.status(500).json({ Message: "Error" });
//   }
// });

// exports.app = functions.https.onRequest(app);

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World");
});

exports.app = functions.https.onRequest(app);
