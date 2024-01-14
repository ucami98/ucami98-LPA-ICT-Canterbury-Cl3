const express = require('express'),
    router =  express.Router(),
    newUserController = require('./controllers')




router.post('/clients', newUserController.create)
//router.post('/findById', jugadorCtrl.findById)
//router.post('/search', jugadorCtrl.search)
//router.put('/', jugadorCtrl.update)
//router.get('/:_id', jugadorCtrl.findById)
//router.delete('/:_id', jugadorCtrl.remove)

module.exports = router