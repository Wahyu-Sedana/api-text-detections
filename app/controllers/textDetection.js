const AWS = require('aws-sdk')
require('dotenv').config()
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const rekognition = new AWS.Rekognition()

const textDetection = (req, res) => {
    let image = req.file.buffer

    let detectParams = {
       Image: {
        Bytes: image
       }
    }

    rekognition.detectText(detectParams, (err, data) => {
        if(err) throw err
        const detectedTexts = Array.from(new Set(data.TextDetections.map(text => text.DetectedText)));
        console.log(detectedTexts);
    })
}

module.exports = { textDetection }