const userTable = require("../models/fetch-model")

exports.getdata = async (req, res) => {
    try{
        if(req.method == 'POST')
        {
            const allEntries = await userTable.find({});
             return res.status(201).json ({
                data: allEntries
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