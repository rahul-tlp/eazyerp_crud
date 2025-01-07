const queryConnection = require("../helpers/queryHelpers");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
let login = function () {

}

login.checkUserAndGenrateToken = async (postData) => {
    try {
        let checkUserExistsQuery = `SELECT * FROM usermaster WHERE email=:email`
        let checkUserExistsQueryValues = { email: postData.email }
        let result = await queryConnection.parametrisedQuery(checkUserExistsQuery, 'select', checkUserExistsQueryValues)
        
        if (result.length) {
            const passwordMatch = await bcrypt.compare(postData.password, result[0].password)

            if (passwordMatch) {

                const token = jwt.sign(
                    { id: result[0].id, email: result[0].email }, // Use database values
                    process.env.JWT_SECRET,
                    { expiresIn: process.env.JWT_EXP } // Token valid for 10 seconds
                  );
                
                return {status: true , message: "token generate successfully", token }
            }else{
                return {status: false , message: "given crredentials mismatched"}
            }

        } else {
            return {status: false, message: "user not found"}

        }
    } catch (error) {
        console.log(error);
        
        throw new Error(error)

    }

}

login.createUser = async (postData) => {
    try {
        const hashedPassword = await bcrypt.hash(postData.password, 10)
        let checkUserExistsQuery = `INSERT INTO usermaster (name, mobile, address, email, password) VALUES (:name, :mobile, :address, :email, :password) RETURNING id`
        let checkUserExistsQueryValues = { name: postData.name, mobile: postData.mobile, address: postData.address, email: postData.email, password: hashedPassword };
        let result = await queryConnection.parametrisedQuery(checkUserExistsQuery, 'insert', checkUserExistsQueryValues)
        
        let data = {};
        if (result.length) {
            data = result[0][0]; // Adjust based on actual structure
        }

        return data
    } catch (error) {
        throw new Error(error)

    }

}

module.exports = login