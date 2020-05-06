(function (root) {
  "use strict"; // Start of use strict

  var app = {};

  // ================================
  // RECORD FOR MONTH UI
  // ================================
  var monthAllCount = 0;
  var monthActiveCount = 0;
  function setMonthRecordsHtml() {
    var monthPercent = cm.getPercent(monthAllCount, monthActiveCount, 1);
    $("#monthRecords .monthPercent").html(monthPercent);
    $("#monthRecords .monthProgress").attr({
      style: "width:" + monthPercent + "%",
      "aria-valuenow": monthActiveCount,
      "aria-valuemax": monthAllCount,
    });
    if (monthPercent > 95) {
      $("#monthRecords .monthProgress").addClass("bg-success");
    } else if (monthPercent <= 95 && monthPercent > 80) {
      $("#monthRecords .monthProgress").addClass("bg-warning");
    } else {
      $("#monthRecords .monthProgress").addClass("bg-danger");
    }
  }

  // ================================
  // AWARDS UI
  // ================================
  function setAwardsHtml() {
    var result = "";
    for (var idx = 0; idx < _file_awards.length; idx++) {
      var html = templete.award
        .replace(/@who/g, _file_awards[idx].who)
        .replace(/@title/g, _file_awards[idx].title)
        .replace(/@record/g, _file_awards[idx].record)
        .replace(/@time/g, _file_awards[idx].time);
      result = html + result;
    }
    $("#collapseAwards .card-body").html(result);
  }

  // ================================
  // MEMBERS UI
  // ================================
  function setRecordDateHtml() {
    $("#membersRecords .recordDate").html(_file_record_date);
  }

  function getActiveMembers() {
    var members = Object.keys(_file_members);
    var activers = {};
    for (var idx = 0; idx < members.length; idx++) {
      var memberKey = members[idx];
      var active = _file_members[memberKey].active;
      if (!!active) {
        activers[memberKey] = _file_members[memberKey].name;
      }
    }
    return activers;
  }

  function countActive(data) {
    var result = {
      activeCount: 0,
      inactiveDays: [],
      passCount : 0,
    };
    var dataKeyArray = Object.keys(data);
    for (var idx = 0; idx < dataKeyArray.length; idx++) {
      var dataKey = dataKeyArray[idx];
      if (data[dataKey].active === true) {
        result.activeCount++;
      } else if (data[dataKey].active === false) {
        result.inactiveDays.unshift(dataKey.toString());
      } else if (data[dataKey].active === "new") {
        result.passCount++;
       } else {
        result.passCount++;
      }
    }
    return result;
  }
  function getBarColor(percent) {
    var result = "bg-success";
    if (percent > 80) {
      result = "bg-success";
    } else if (percent <= 80 && percent > 50) {
      result = "bg-warning";
    } else {
      result = "bg-danger";
    }
    return result;
  }

  function setMembersHtml() {
    var activers = getActiveMembers();
    var members = Object.keys(activers);
    var result = "";
    for (var idx = 0; idx < members.length; idx++) {
      var member = members[idx];
      var year = new Date(_file_record_date).getFullYear();
      var month = new Date(_file_record_date).getMonth() + 1;
      var targetData = _file_records[member][year][month];
      var targetCount = countActive(targetData);
      var name = activers[member];
      var passCount = targetCount.passCount;
      var allCount = Object.keys(targetData).length - passCount;
      var activeCount = targetCount.activeCount;
      var percent = cm.getPercent(allCount, activeCount, 1);
      var barColor = getBarColor(percent);
      var html = templete.memberRecords
        .replace(/@name/g, name)
        .replace(/@allCount/g, allCount)
        .replace(/@activeCount/g, activeCount)
        .replace(/@percent/g, percent)
        .replace(/@barColor/g, barColor);
      result = result + html;

      monthAllCount = monthAllCount + allCount;
      monthActiveCount = monthActiveCount + activeCount;
    }

    $("#membersRecords .card-body").html(result);
  }

  // ================================
  // SET UI
  // ================================
  app.init = function () {
    // AWARDS UI
    setAwardsHtml();

    // MEMBERS UI
    setRecordDateHtml();
    setMembersHtml();

    // RECORD FOR MONTH UI
    setMonthRecordsHtml();
  };

  app.init();
  root.app = app;
})(this); // End of use strict
