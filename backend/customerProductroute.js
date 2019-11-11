const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Item = require('./customerProductSchema');

router.get('/item',(req, res, next)=>{
    Item.find((err,items)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(items)
        }
    });
});


router.post('/itempost',(req, res, next)=>{
    console.log(req.body);
    let newItem = new Item({
        Pid:req.body.Pid,
        ProductName: req.body.ProductName,
        Name: req.body.Name,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Bidplace: req.body.Bidplace,
        BidObtained:0
    });
    newItem.save((err)=>{
        if(err){
            console.log("err", err);
            res.json(err);
        }
        else{
            Msg(newItem.Name, newItem.Phone);
            console.log("successfully");
            res.json({msg: 'hurray!! item added successfully'});
        }
    });
});

router.post('/itemupdate/:id', (req,res,next)=>{
    Item.findOneAndUpdate(
        {
         $set:{
            Pid:req.body.Pid,
            ProductName: req.body.ProductName,
            Name: req.body.Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Bidplace: req.body.Bidplace,
            BidObtained:req.body.BidObtained
        }},
        (err, result)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        }
    )
});

router.post('/itemdelete/:id',(req, res, next)=>{
    Item.remove({
        _id: req.params.id
    },(err, results)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Betta Delete ho gaya nikal ab!'});
        }
    });
});

module.exports = router;

function Msg(nm, ph){
AWS.config.region = 'us-east-1';
var sns = new AWS.SNS();
var AWS = require('aws-sdk');

var params = {
    MessageAttributes: {
        'AWS.SNS.SMS.SMSType': {
            DataType: 'String',
            StringValue: 'Transactional'
        }
    },
        Message: ('this is a test message from '+nm+' and phone number is '+ph),
        PhoneNumber: '+919606260923'
    };


    sns.publish(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else     console.log(data);
    });
}
