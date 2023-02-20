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
      parameters: event.queryStringParameters,
      url: event.rawUrl,
      headers: event.headers,
      memory: context.memoryLimitInMB,
      getRemainingTimeInMillis: context.getRemainingTimeInMillis(),
    }, null, 2)
  }
}