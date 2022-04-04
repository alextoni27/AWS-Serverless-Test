const { v4 } = require("uuid");
const BaseService = require('../services/BaseService');
const service = new BaseService();
const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");

const addTask = async (event) => {

  const { title, description } = event.body;
  const createdAt = new Date();
  const id = v4();

  console.log("created id: ", id);

  const newTask = {
    id,
    title,
    description,
    createdAt,
    done: false,
  };

  const params = {
    TableName: "TasksTable",
    Item: newTask
  };

  await service.CreateEntity(params);

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };
};

module.exports = {
  addTask: middy(addTask).use(httpJSONBodyParser()),
};
