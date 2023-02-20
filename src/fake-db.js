import uniqueId from "lodash.uniqueid";

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

export default DB;