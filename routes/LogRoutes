const express = require('express')

const logController = require('../controllers/logController')

const router = express.Router()

//induces

router.get('/', logController.index)

router.delete('/:id', logController.delete)

router.get('/new', logController.new)

router.post('/', logController.create)

router.put('/:id', logController.update)

router.get('/:id/edit', logController.edit)

router.get('/:id', logController.show)




module.exports = router