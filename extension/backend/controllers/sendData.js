const userTable = require("../../../website/nodeapp/models/fetch-model")

exports.sendData = async (req, res) => {
    try{
        if(req.method == 'POST')
        {
            const domain = req.body.domain;
            const footprint = req.body.footprint;
            const green = req.body.green;

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

}