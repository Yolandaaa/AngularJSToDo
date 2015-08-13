angular.module('todo', ['ui.bootstrap'])
.controller('listIt', function(){
  var vm = this;
  vm.items = [];  
  
  vm.addItem = function() {
    if(vm.item === undefined || vm.item === "") {
      vm.noItem = "Please enter a todo item."
    } else {
      vm.items.push({
        text : vm.item,
        editing : false,
        done : false
      });
      vm.items.reverse();
      vm.updateUI();
    }
  };
  
  vm.removeItem = function(index) {
    vm.items.splice(index, 1);
    vm.updateUI();
  };

  vm.editItem = function(index) {
    vm.items[index].editing = !vm.items[index].editing;
  };

  vm.updateUI = function(){
    
    vm.item = "";
    vm.noItem = "";
  };

  vm.remaining = function() {
    var itemsLeft = 0;
    angular.forEach(vm.items, function(item) {
      itemsLeft += item.isDone ? 0 : 1;
    });
    return itemsLeft;
  };

});