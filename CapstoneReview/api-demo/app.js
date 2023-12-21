const express = require('express')
const app = express()
const port = 3000

const peopleRoutes = require('./routes/api.people')
const productRoutes = require('./routes/api.products')

app.use(express.static('public'))
app.use('/api/people', peopleRoutes)
app.use('/api/products', productRoutes)


app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})