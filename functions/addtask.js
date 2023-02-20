const uniqueId = require("lodash.uniqueid");

const DB = [
  { id: uniqueId("todo-"), label: "Learn Vue 3", done: false },
  {
    id: uniqueId("todo-"),
    label: "Learn serverless functions",
    done: true,
  },
  { id: uniqueId("todo-"), label: "Have fun", done: true },
  { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
]

exports.handler = async (event, context) => {
  console.log(JSON.stringify(DB, null, 2))
  return {
    statusCode: 200,
    body: JSON.stringify(DB),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  }
}