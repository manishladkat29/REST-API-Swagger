exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Manish says ' + event.queryStringParameters.keyword),
    };
    return response;
};

