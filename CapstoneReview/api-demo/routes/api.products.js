const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

router.get('/', (request, response) => {

    console.log("requesting products")
    const products = [
        {
            id: 1,
            name: "Bananas",
            price: 1.99
        },
        {
            id: 2,
            name: "Apples",
            price: .33
        }
    ]

    response.setHeader("Content-type", "application/json")

    response.json(products)
})

module.exports = router