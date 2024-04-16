const task = {
    tasks: [
        {
            text: 'shop',
            completed: true
        },
        {
            text: 'shop',
            completed: true
        },
        {
            text: 'shop',
            completed: false
        },
        {
            text: 'shop',
            completed: true
        },
    ],
    getTasksToDo() {
        return this.tasks.filter((task) =>task.completed === false)
    }
}

console.log(task.getTasksToDo())