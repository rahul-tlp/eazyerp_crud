let express = require('express');
let  masterController = require('../controller/masterControlller')
let  loginController = require('../controller/loginController')
let  authenticaiton = require('../config/auth')
let { check,oneOf } = require('express-validator');

let router = express.Router();

router.post('/createUser',oneOf([[
    check('name' , 'name is requied').notEmpty(),
    check('mobile' , 'mobile is requied').notEmpty(),
    check('address' , 'address is requied').notEmpty(),
    check('email' , 'email is requied').notEmpty(),
    check('password' , 'password is requied').notEmpty()
]]),loginController.createUser)

router.post('/login',oneOf([[
    check('email', 'email is requied').notEmpty(),
    check('password', 'password is requied').notEmpty(),
]]),loginController.loginUser)

router.post('/master/productList',oneOf([[
    check('status', 'status is requied').notEmpty(),
]]),authenticaiton.tokenAuth,masterController.productList)

router.post('/master/productAdd',oneOf([[
    check('name', 'Name is required').notEmpty(),
    check('description', 'description is required').notEmpty(),
    check('size', 'size is required').notEmpty(),
    check('status', 'Status is required').notEmpty(),
]]),authenticaiton.tokenAuth,masterController.productAdd)


router.post('/master/productUpdate',oneOf([[
    check('id', 'id is required').notEmpty(),
    check('name', 'Name is required').notEmpty(),
    check('description', 'description is required').notEmpty(),
    check('size', 'size is required').notEmpty(),
    check('status', 'Status is required').notEmpty(),
]]),authenticaiton.tokenAuth,masterController.productUpdate)

router.post('/master/deleteProduct',oneOf([[
    check('id', 'id is required').notEmpty()
]]),authenticaiton.tokenAuth,masterController.deleteProduct)





module.exports = router;
