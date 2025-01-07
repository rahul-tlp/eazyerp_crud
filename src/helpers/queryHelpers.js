const db = require("../config/db")
const postgresQueryConnection = {
    
    
    parametrisedQuery: async function (query, type, values) {

        let result;

        const options = {
            replacements: values,
        };
        if (type == 'select') {
            result = await db.query(query, {
                ...options,
                type: db.QueryTypes.SELECT,
            });
            return result;
        } else if (type == 'insert') {
            result = await db.query(query, {
                ...options,
                type: db.QueryTypes.INSERT,
            });
            console.log("resi",result);
            
            return result;
        } else if (type == 'update') {
            result = await db.query(query, {
                ...options,
                type: db.QueryTypes.UPDATE,
            });
            return result;
        } else if (type == 'delete') {
            result = await db.query(query, {
                ...options,
                type: db.QueryTypes.DELETE,
            });
            return result;
        } else {
            result = await db.query(query, {
                ...options,
                type: db.QueryTypes.SELECT,
            });
            return result;
        }
    },
};
module.exports = postgresQueryConnection
