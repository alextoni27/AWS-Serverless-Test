const Response = (status, message, data) => {
    result = {
        status: status,
        message: message,
        data: data
    }
    return result;
}

module.exports = Response;