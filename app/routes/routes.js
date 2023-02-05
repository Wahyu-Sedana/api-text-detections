const express = require('express')
const route = express.Router()

const textDetection = require('../controllers/textDetection')

const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage()
})

route.post('/detect', upload.single("image"), textDetection.textDetection)

module.exports = route