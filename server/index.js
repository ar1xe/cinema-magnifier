// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const PORT = process.env.PORT || 3333;

const app = express();

app.listen(PORT, () => {
  console.log("Server has been started...");
});
