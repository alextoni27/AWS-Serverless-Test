const AWS = require("aws-sdk");
const BaseService = require('../services/BaseService');
const service = new BaseService();

const deleteTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const deleteTask = {
    TableName: "TasksTable",
    Key: {
      id
    }
  };

  await service.DeleteEntity(deleteTask);

  return {
    status: 200,
    body: {
      message: 'Deleted Task'
    }
  };
};

module.exports = {
  deleteTask,
};
