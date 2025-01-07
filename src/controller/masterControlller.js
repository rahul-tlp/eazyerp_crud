const Master = require('../model/masterModel')
const { validationResult, matchedData } = require('express-validator');

exports.productList = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const x = matchedData(req);
        return res.send({ message: 'Invalid Values', status: 'invalid', err: errors.mapped() });
    }


    try {
        let productListCount = await Master.productCount(req.body)

        let productList = []
        console.log('productListCount',productListCount);
        
        if (productListCount > 0) {
            productList = await Master.productList(req.body)
        }

        res.status(200).json({
            status: 'success',
            message: 'Product List Data',
            result: {
                productList: productList,
                count: productListCount
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
            err :err
        });
 

    }
}

exports.productAdd = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const x = matchedData(req);
        return res.send({ message: 'Invalid Values', status: 'invalid', err: errors.mapped() });
    }


    try {
        const productAdd = await Master.productAdd(req.body)

        if (productAdd.id) {
            res.status(200).json({
                status: 'success',
                message: 'Data added successfully',
                result : {
                    id : productAdd.id
                }
            })

        } else {
            res.status(200).json({
                status: 'success',
                message: 'Data not added'

            })

        }


    } catch (e) {
        var err = {
            code: e.code,
            sqlMessage: e.sqlMessage
        };
        res.status(200).json({
            message: "Error Occured",
            status: "error",
            err :err
        });

    }
}

exports.productUpdate = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const x = matchedData(req);
        return res.send({ message: 'Invalid Values', status: 'invalid', err: errors.mapped() });
    }


    try {
        const productUpdate = await Master.productUpdate(req.body)

        if (productUpdate) {
            res.status(200).json({
                status: 'success',
                message: 'Data updated successfully'    
            })

        } else {
            res.status(200).json({
                status: 'success',
                message: 'Data not updated'

            })

        }


    } catch (e) {
        var err = {
            code: e.code,
            sqlMessage: e.sqlMessage
        };
        res.status(200).json({
            message: "Error Occured",
            status: "error",
            err: err
        });

    }
}
exports.deleteProduct = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const x = matchedData(req);
        return res.send({ message: 'Invalid Values', status: 'invalid', err: errors.mapped() });
    }

    try {
        const deleteProduct = await Master.productDelete(req.body)

        if (deleteProduct) {
            res.status(200).json({
                status: 'success',
                message: 'Product Deleted successfully'    

            })

        } else {
            res.status(200).json({
                status: 'success',
                message: 'Product Not Deleted'

            })

        }


    } catch (e) {
        var err = {
            code: e.code,
            sqlMessage: e.sqlMessage
        };
        res.status(200).json({
            message: "Error Occured",
            status: "error",
            err: err
        });

    }
}

