(function (root) {
  var TAG = "common";
  var cm = {};

  cm.getCurrentDate = function () {
    var date = new Date().toLocaleDateString("ko-KR");
    return date;
  };

  cm.getPercent = function (sum, count, point) {
    var result = 0;
    result = parseFloat(((count * 100) / sum).toFixed(point));
    return result;
  };

  root.cm = cm;
})(this);
