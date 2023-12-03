const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../model/model');

//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

router.post('/signup', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/products/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        await Model.findByIdAndDelete(req.params.id)
        res.send(`${req.params.id} account has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})