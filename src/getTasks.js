const AWS = require("aws-sdk");
const BaseService = require('../services/BaseService');
const service = new BaseService();

const getTasks = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: "TasksTable"  };

  const listTask = await service.listEntity(params);


  return {
    status: 200,
    body: {
      listTask,
    },
  };
};

module.exports = {
  getTasks,
};
