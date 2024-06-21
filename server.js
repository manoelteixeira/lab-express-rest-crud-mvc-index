// server.js
require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const app = require("./app.js");

app.listen(PORT, () => {
  console.log(
    `Server is listening on port: ${PORT}\nlink: http://localhost:${PORT}`
  );
});
