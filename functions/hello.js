const os = require('node:os');
exports.handler = async (event, context) => {
  console.log(JSON.stringify(os.cpus(), null, 2))
  console.log("================EVENT====================")
  console.log(JSON.stringify(event, null, 2))
  console.log("================CONTEXT====================")
  console.log(JSON.stringify(context, null, 2))

  return {
    statusCode: 200,
    body: JSON.stringify({ 
      httpMethod: event.httpMethod,
      parameters: event.queryStringParameters,
      body: event.body || 'NO BODY',
      url: event.rawUrl,
      headers: event.headers,
      memory: context.memoryLimitInMB,
      getRemainingTimeInMillis: context.getRemainingTimeInMillis(),
    }, null, 2)
  }
}