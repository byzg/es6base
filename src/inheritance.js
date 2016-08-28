class Task {
  constructor(title) {
    Task.count += 1;
    this._title = title;
    this.done = false;
    console.log('Создание задачи');
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = title;
  }

  static getDefaultTitle() {
    return 'Задача'
  }

  complete() {
    this.done = true;
    console.log(`Задача "${this.title}" выполнена`);
  }
}

Task.count = 0;

class SubTask extends Task {
  constructor(title, parent) {
    super(title);
    this.parent = parent;
    console.log('Создание подзадачи');
  }

  complete() {
    super.complete();
    console.log(`Подзадача "${this.title}" выполнена`);
  }
}

let task = new Task('Изучить JS');
let subTask = new SubTask('Изучить ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);