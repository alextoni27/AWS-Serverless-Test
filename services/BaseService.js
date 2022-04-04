const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });
class BaseService {
    async CreateEntity(_params) {
        try {
            await documentClient.put(_params).promise();
        } catch (error) {
            return error;
        }
    }
    async listEntity(_params) {
        try {
            let scanResults = [];
            let items;
            do {
                items = await documentClient.scan(_params).promise();
                items.Items.forEach((item) => scanResults.push(item));
                _params.ExclusiveStartKey = items.LastEvaluatedKey;
            } while (typeof items.LastEvaluatedKey !== "undefined");
            return scanResults;
        } catch (error) {
            return error;
        }
    }
    async DeleteEntity(_params) {
        try {
            await documentClient
            .delete(_params)
            .promise();
        } catch (error) {
            return error;
        }
    }
}

module.exports = BaseService;