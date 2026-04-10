require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");
const app = express();

// middleware --
app.use(express.json());
/* ========================= Create API ================ */

/*  notes create */
app.post("/note", async (req, res) => {
  const { title, content } = req.body;

  await noteModel.create({
    title,
    content,
  });

  res.json({
    message: "Note create Successfully!",
  });
});

// ---------------------------------------

/*  Show the data */
app.get("/note", async (req, res) => {
  const notes = await noteModel.find();
  res.json({
    message: "Note fetch Successfully",
    notes,
  });
});

// ---------------------------------------

/*  Delete method */
app.delete("/note/:id", async (req, res) => {
  const noteId = req.params.id;
  await noteModel.findByIdAndDelete({
    _id: noteId,
  });
  res.json({
    message: "note Deleted Successfully !",
  });
});

// ---------------------------------------

/*  Update method */

app.patch("/note/:id", async (req, res) => {
  const noteId = req.params.id;
  const { title } = req.body;

  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      title: title,
    },
  );
    res.json({
    message: "Note Updated Successfully."
  })
});

// database call --
connectToDB();

app.listen(3000, () => {
  console.log("Server is running port on 3000");
});
