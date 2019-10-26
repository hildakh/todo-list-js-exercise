// Arrays to keep track of each task's state
// const taskTitles = [];   //commentd out as we changed it into an object
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
//Not needed anymore as the functions were added to the object as methods
// function completeTask(task) {
//   task.complete = true;
// }

// Print the state of a task to the console in a nice readable way
//not needed anymore as functions were added as methods to the object

// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW
const task1 = newTask('Clean up the room', 'Put everything away and clean the windows');
const task2 = newTask('Prepare for the test', 'Revise the lessons and ask a friend for help');
const task3 = newTask('Talk to your mom', 'Call your mom first thing in the morning and see how she is doing');

//const tasks = [task1, task2, task3];

// The two line below not needed now that we have a task creator
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completedtask1
task1.completeTask();
task2.logState();
task2.completeTask();
task3.logState();
task3.completeTask();
// logTaskState(); // Clean Cat Litter has been completed

// console.log(tasks);
