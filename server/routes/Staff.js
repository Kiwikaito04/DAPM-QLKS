const express = require('express')
const router = express.Router()
const { Staff } = require("../models")

router.get('/', async (req, res) => {
    const listOfStaff = await Staff.findAll()
    res.json(listOfStaff)
})
router.post('/', async (req, res) => {
    const staff = req.body
    await Staff.create(staff)
    res.json(staff  )

})


module.exports = router
