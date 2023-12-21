const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

router.get('/', (request, response) => {

    const filePath = path.join(__dirname, '..', 'data', 'people.json');

    console.log(`${__dirname}\\..\\data\\people.json`)
    console.log(filePath);

    let body = {}

    try {
        const json = fs.readFileSync(filePath, 'utf-8')
        body = JSON.parse(json)

        response.status(200)
  
    } catch (error) {
       
        // console.warn("Error reading file: ", error);
        body = {
            message: "An error occurred on the server. Try again later."
        }

        response.status(500)
    }
    
    response.setHeader("Content-type", "application/json")
    response.json(body)
})

router.post("/", (request, response) => {
    console.log(request.body)

    response.status(200).json(request.body)
})

module.exports = router