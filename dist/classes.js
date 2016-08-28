'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task() {
    var title = arguments.length <= 0 || arguments[0] === undefined ? Task.getDefaultTitle() : arguments[0];

    _classCallCheck(this, Task);

    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('Создание задачи');
  }

  _createClass(Task, [{
    key: 'complete',
    value: function complete() {
      this.done = 1;
      console.log(this.done);
    }
  }, {
    key: 'done',
    get: function get() {
      return 'Задача "' + this.title + '" ' + (this._done ? '' : 'не ') + 'выполнена';
    },
    set: function set(value) {
      if (value !== undefined && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === Boolean) this._done = value;else console.error('Ошибка! Укажите значение true или false');
    }
  }], [{
    key: 'getDefaultTitle',
    value: function getDefaultTitle() {
      return 'Задача';
    }
  }]);

  return Task;
}();

//Task.count = 0;

var task = new Task('Убрать комнату');
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

console.log(task.done);
task.complete();