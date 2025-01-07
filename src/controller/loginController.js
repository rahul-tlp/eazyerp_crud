const login = require('../model/loginModel')
const { check, validationResult, matchedData, oneOf, body } = require('express-validator');

exports.createUser = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const x = matchedData(req);
        return res.send({ message: 'Invalid Values', status: 'invalid', err: errors.mapped() });
    }

    try {
        let createUser = await login.createUser(req.body)
        console.log('createUser',createUser);
        
        if(createUser){
            res.status(200).json({
                status: 'success',
                message: 'user created successfully',
                result: {
                    id: createUser.id
                }
            })

        }else{
            res.status(200).json({
                status: 'success',
                message: 'failed to create user'
            })

        }
       
    } catch (e) {
        var err = {
            code: e.code,
            sqlMessage: e.sqlMessage
        };
        res.status(500).json({
            message: "Error Occured",
            status: "error",
            err: err
        });


    }
}
exports.loginUser = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const x = matchedData(req);
        return res.send({ message: 'Invalid Values', status: 'invalid', err: errors.mapped() });
    }

    try {
        let checkUserAndGenrateToken = await login.checkUserAndGenrateToken(req.body)
        res.status(200).json({
            status: checkUserAndGenrateToken.status,
            message: checkUserAndGenrateToken.message,
            result: {
                token: checkUserAndGenrateToken.token || ''
            }
        })
       
    } catch (e) {
        var err = {
            code: e.code,
            sqlMessage: e.sqlMessage
        };
        res.status(500).json({
            message: "Error Occured",
            status: "error",
            err: err
        });


    }
}