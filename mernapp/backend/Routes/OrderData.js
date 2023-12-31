const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    data.splice(0, 0, { Order_date: req.body.order_date });

    let eId = await Order.findOne({ 'email': req.body.email });
    console.log(eId);
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: data 
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error.message);
            
            res.status(500).send({ error: "Server Error", message: error.message });
        }
    } else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } });
            res.json({ success: true });
        } catch (error) {
            
            res.status(500).send({ error: "Server Error", message: error.message });
        }
    }
});

router.get('/myorderData', async(req, res) => {
    try {
        const myData = await Order.find({'email': req.query.email});
        res.json(myData);
    } catch (error) {
        res.status(500).send({ error: "Server Error", message: error.message });
    }
});

module.exports = router;
