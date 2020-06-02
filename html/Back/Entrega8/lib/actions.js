const path = require("path");
const fs = require("fs-extra");
const os = require("os");
const chalk = require("chalk");
const { formatDistance } = require("date-fns");
const { es, gl, en} = require("date-fns/locale");

require("dotenv").config();

const todoFile = path.join(os.homedir(), process.env.TASKS_FILE);

let dateLocaleConfig;

switch (process.env.LANGUAGE) {
  case "gl":
    dateLocaleConfig = { locale: gl };
    break;
  case "en":
    dateLocaleConfig = { locale: en };
    break;
  default:
    dateLocaleConfig = { locale: es };
}

const listTitle = {
  en: "Todo list",
  es: "Lista de tareas",
  gl: "Lista de tarefas",
};

// Nos da un objeto con la lista guardada, no no hay lo crea.

async function readTodoList() {
  try {
    await fs.ensureFile(todoFile);

    const currentTodos = await fs.readFile(todoFile, "utf-8");

    if(currentTodos) {
      return JSON.parse(currentTodos);
    }
    return{
      tasks: [],
    };
    console.log("Current", currentTodos);
  }catch (error) {
   console.error(error); 
  }
}

// Agrega la tarea al principio de la lista y la guarda.

async function addTodo({ text, priority }) {
  const currentTodos = await readTodoList();

  const newTask = {
    text,
    added: new Date(),
    priority: priority ? "high" : "normal",
    done: false,
  };

  currentTodos.tasks = [newTask, ...currentTodos.tasks];

  await saveTodosToFile(currentTodos);
}

 // marca si esta hecha la actividad y guarda la lista

async function markAsDone({ index }) {
  const currentTodos = await readTodoList();

  currentTodos.tasks[index - 1].done = true;

  await saveTodosToFile(currentTodos);
}

// marca como no hecha.

async function markAsUnDone({ index }) {
  const currentTodos = await readTodoList();

  currentTodos.tasks[index - 1].done = false;

  await saveTodosToFile(currentTodos);
}

// realiza la lista de actividad. 
async function listTodos() {
  const currentTodos = await readTodoList();

  console.log();
  console.log(chalk.blue(listTitle[process.env.LANGUAGE]));

  for (const [index, task] of currentTodos.tasks.entries()) {
    const taskStatus = task.done ? "☑" : "☐";
    const taskHumanDate = formatDistance(
      new Date(task.added),
      new Date(),
      dateLocaleConfig
    );

    const taskText = task.done ? chalk.strikethrough(task.text) : task.text;
    const taskDisplay = chalk`   ${
      index + 1
    } - ${taskStatus} ${taskText} (añadida ${taskHumanDate})`;

    if (task.priority === "high") {
      console.log(chalk.red(taskDisplay));
    } else {
      console.log(chalk.green(taskDisplay));
    }
  }

  console.log();
}

// borra las actividades marcadas como hechas
async function cleanTodos() {
  const currentTodos = await readTodoList();

  currentTodos.tasks = currentTodos.tasks.filter((task) => !task.done);

  await saveTodosToFile(currentTodos);
}

async function saveTodosToFile(taskList) {
  taskList.lastModified = new Date();

  await fs.outputJSON(todoFile, taskList, { spaces: 2 });
}

module.exports = {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
};

