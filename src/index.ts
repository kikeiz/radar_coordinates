import app from "./app";
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.info(`Express server listening on port ${port}`)
});