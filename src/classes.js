class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('Создание задачи');
  }

  get done() {
    return `Задача "${this.title}" ${this._done ? '' : 'не '}выполнена`
  }

  set done(value) {
    if (value !== undefined && typeof value === Boolean)
      this._done = value;
    else
      console.error('Ошибка! Укажите значение true или false')
  }

  complete() {
    this.done = 1;
    console.log(this.done)
  }

  static getDefaultTitle() {
    return 'Задача';
  }
}

//Task.count = 0;

let task = new Task('Убрать комнату');
//let task2 = new Task('Купить продукты');
//let task3 = new Task();
//
//console.log(task.title);
//console.log(task2.title);
//console.log(task3.title);
//
//console.log(Task.count);
//
//task2.complete();

console.log(task.done)
task.complete()