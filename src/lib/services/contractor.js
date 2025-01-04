const dbService = require("../utilities/dbService");

/*************************** addContractor ***************************/

const addContractor = async (body) => {
    try {
       
        let product = {
            email:"vaghasiya@",
            password:"1236"
        }
        let res = await dbService.createOneRecord("contractorModel",product);
        console.log("res",res);

    
    } catch (error) {
        console.log(body);
    }
};

module.exports = {
    addContractor
}