const express = require("express");

const app = express();
// middleware
app.use(express.json());

const notes = [];

// client -------..data..-----> Server
// create notes..........
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Notes Add Successfuly.",
  });
});

// client <-------..data..-----Server
// show notes.....
app.get("/notes", (req, res) => {
  res.json(notes);
});

/* delete /notes/:index */
// notes delete................
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: "notes deleted Successfuly",
  });
});

/*  patch /notes/:index =>titte */
// notes update...............
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title } = req.body;
  notes[index].title = title;
  res.json({
    message: "notes updated Successfuly",
  });
});
app.listen(3000, () => {
  console.log("Server is runnig at port 3000");
});
