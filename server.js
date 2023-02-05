const express = require('express')
const app = express()
const router = require('./app/routes/routes')

require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(router)

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});