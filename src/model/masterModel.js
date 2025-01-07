let queryConnection = require("../helpers/queryHelpers");

let Master = function (data) {};

Master.productCount = async (postData) => {
  try {
    let queryString =
      "SELECT COALESCE(COUNT(id), 0) AS totalCount From master_product where status=:status";
    console.log("queryString", queryString);

    let queryStringValues = {
      status: postData.status,
      limit: postData.limit,
      offset: postData.start,
    };
    let result = await queryConnection.parametrisedQuery(
      queryString,
      "select",
      queryStringValues
    );
    let data = {};

    if (result.length) {
      data = result[0].totalcount;
    }
    return data;
  } catch (error) {
    console.log("error", error);

    throw new Error(error);
  }
};

Master.productList = async (postData) => {
    console.log('postData',postData);
    
  try {
    let queryString = "SELECT * FROM master_product  where status=:status";
    let queryStringValues = { status: postData.status };
    let result = await queryConnection.parametrisedQuery(
      queryString,
      "select",
      queryStringValues
    );

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

Master.productAdd = async (postData) => {
  try {
    let query = `INSERT INTO master_product (name,description,size,status) VALUES (:name,:description,:size,:status) RETURNING id`;
    let queryvalues = {
      name: postData.name,
      description: postData.description,
      size: postData.size,
      status: 1,
    };
    let result = await queryConnection.parametrisedQuery(
      query,
      "insert",
      queryvalues
    );
    if (result) {
      return { status: true, id: result[0][0].id };
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error);
  }
};

Master.productUpdate = async (postData) => {
  try {
    let query = `UPDATE  master_product SET name=:name,description=:description,size=:size,status=:status WHERE id=:id`;
    let queryvalues = {
      name: postData.name,
      description: postData.description,
      size: postData.size,
      status: 1,
      id: postData.id,
    };
    let result = await queryConnection.parametrisedQuery(
      query,
      "update",
      queryvalues
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error);
  }
};

//This function is soft deleting the data.
Master.productDelete = async (postData) => {
  try {
    let query = `UPDATE master_product SET status=:status WHERE id=:id`;
    let queryvalues = {
      status: 0,
      id: postData.id,
    };
    let result = await queryConnection.parametrisedQuery(
      query,
      "update",
      queryvalues
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = Master;
