var sys = require('sys');

function Person(name) {
  this.name = name
}
Person.prototype = {
  greet: function () {
    return "Hello world, my name is " + this.name;
  }
};

var frank = new Person("Frank Dijon");
sys.puts(frank.greet());
