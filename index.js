const express = require('express');
const path = require('path');
const logger = require("./middleware/logger");


const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port: ${port}`));

//init logger 
app.use(logger);

// static folder
app.use(express.static(path.join(__dirname,"public")));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use("/api/members", require('./routes/api/members'));
app.use("/api/members/:name", require('./routes/api/members'));