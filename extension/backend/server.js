const express = require('express');
const mongoose = require('mongoose');
//use body parser
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT  = 8800;

mongoose.connect('mongodb+srv://chinmaydeo2004:chinmay123@cluster0.3w273ju.mongodb.net/databases')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema for data
const userSchema = new mongoose.Schema({
    domain: String,
    footprint: Number,
    green: Boolean
});
const userTable = mongoose.model('database',userSchema);

//define route
app.post('/sendData', async (req, res) => {
    try{
        if(req.method == 'POST')
        {
            const {domain, footprint, green} = req.body;
            console.log(domain, footprint, green);
    
            //check if the domain is already present in the database
            const user = await userTable.findOne({domain});
            if(user){
                //add the footprint and green to the existing domain
                user.footprint += footprint;
                user.green = green;
                await user.save();
                
                return res.status(201).json({
                    message: "Domain already exists, updated the footprint and green status."
                })
            }
            //if the domain is not present in the database, add the domain to the database
            const newUser = new userTable({
                domain,
                footprint,
                green
            })
            await newUser.save();
            res.status(201).json({
                message: "Domain added to the database"
            })
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "failed"
        })
    }
    });

    //start server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
