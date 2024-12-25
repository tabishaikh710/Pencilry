const db = require("../config/db");

//Get All Posted Jobs
const getPostedJobs = async (req, res) => {
    try {
        
        const data= await db.query("SELECT * FROM postajob");
        if (!data) {
            return res.status(404).send({
                success:false,
                message: "No jobs found"

            });
        }else{

            res.status(200).send({
                success:true,
                message: "Jobs found",
                data
            })
        }



    } catch (error) {
        console.log(error);
        resizeBy.status(500).send({
            success:false,
            message:"Error in All posted jobs API",
            error,
        });
        
    }
}

module.exports={getPostedJobs};