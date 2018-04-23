angular
  .module('app.widgets')
  .controller('myTime', timeCtrl);

function timeCtrl($interval) {
  var timeController = this;
  timeController.clock = { time: "", interval: 1000 };

  $interval(function () { 
    timeController.clock.time = Date.now();}, 
    timeController.clock.interval);
}
