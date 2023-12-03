const app = require('./app');
require('dotenv').config({ path: './.env' });

const { PORT } = process.env;

app.listen(PORT, () => {});
