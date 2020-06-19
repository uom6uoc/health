(function(root) {
  "use strict"; // Start of use strict

  var app = {};

  var RECOREDS_DATE;
  var ACTIVE_MEMBER;
  var MONTH_RECORDS;

  var GRAPH_BOUNDARY = {
    MONTH: {
      WARNING: 95,
      CRITICAL: 80,
    },
    MEMBER: {
      WARNING: 99.99999,
      CRITICAL: 99.999,
    },
  };

  var monthAllCount = 0;
  var monthActiveCount = 0;

  // ================================
  // RECORD FOR MONTH UI
  // ================================
  function setMonthRecordsHtml() {
    var monthPercent = cm.getPercent(monthAllCount, monthActiveCount, 1);
    $("#monthRecords .monthPercent").html(monthPercent);
    $("#monthRecords .monthProgress").attr({
      style: "width:" + monthPercent + "%",
      "aria-valuenow": monthActiveCount,
      "aria-valuemax": monthAllCount,
    });
    if (monthPercent > GRAPH_BOUNDARY.MONTH.WARNING) {
      $("#monthRecords .monthProgress").addClass("bg-success");
    } else if (monthPercent <= GRAPH_BOUNDARY.MONTH.WARNING && monthPercent > GRAPH_BOUNDARY.MONTH.CRITICAL) {
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
        .replace(/@date/g, _file_awards[idx].date);
      result = result + html;
    }
    $("#collapseAwards .card-body").html(result);
  }

  // ================================
  // MEMBERS UI
  // ================================

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

  function getRecordsDate() {
    var result = {};
    result.year = Math.max.apply(null, Object.keys(_file_records));
    result.month = Math.max.apply(null, Object.keys(_file_records[result.year]));
    result.day = Math.max.apply(null, Object.keys(_file_records[result.year][result.month]));
    return result;
  }

  function getStringDate() {
    var result = "0000년 0월 0일";
    var arrayDate = RECOREDS_DATE;
    result = arrayDate.year + "년 " + arrayDate.month + "월 " + arrayDate.day + "일";
    return result;
  }

  function setRecordDateHtml() {
    $("#membersRecords .recordDate").html(getStringDate());
  }

  function getMonthRecords() {
    var result = {};

    var year = RECOREDS_DATE.year;
    var month = RECOREDS_DATE.month;
    var monthRecords = _file_records[year][month];
    var dayArray = Object.keys(monthRecords);
    var members = Object.keys(ACTIVE_MEMBER);

    var newRecords = {};
    for (var idx = 0; idx < members.length; idx++) {
      var name = members[idx];
      newRecords[name] = {};
      for (var dayIdx = 0; dayIdx < dayArray.length; dayIdx++) {
        var day = dayArray[dayIdx];
        if (monthRecords[day][name]) {
          newRecords[name][day] = monthRecords[day][name];
        } else {
          //
        }
      }
    }
    result = newRecords;
    return result;
  }

  function countActive(data) {
    var result = {
      activeCount: 0,
      inactiveDays: [],
      passCount: 0,
    };
    var dataKeyArray = Object.keys(data);
    for (var idx = 0; idx < dataKeyArray.length; idx++) {
      var dataKey = dataKeyArray[idx];

      if (data[dataKey].active === true) {
        result.activeCount++;
      } else if (data[dataKey].active === false) {
        result.inactiveDays.unshift(dataKey.toString());
      } else if (data[dataKey].active === "join") {
        result.activeCount++;
      } else if (data[dataKey].active === "leave") {
        result.passCount++;
      } else {
        result.passCount++;
      }
    }
    return result;
  }
  function getBarColor(percent) {
    var result = "bg-success";
    if (percent > GRAPH_BOUNDARY.MEMBER.WARNING) {
      result = "bg-success";
    } else if (percent <= GRAPH_BOUNDARY.MEMBER.WARNING && percent > GRAPH_BOUNDARY.MEMBER.CRITICAL) {
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
      var targetData = MONTH_RECORDS[member];
      var targetCount = countActive(targetData);
      var name = activers[member];
      var passCount = targetCount.passCount;
      var allCount = Object.keys(targetData).length - passCount;
      var inactiveDays = addInactiveDays(targetCount.inactiveDays);
      var activeCount = targetCount.activeCount;
      var percent = cm.getPercent(allCount, activeCount, 1);
      var barColor = getBarColor(percent);
      var html = templete.memberRecords
        .replace(/@name/g, name)
        .replace(/@allCount/g, allCount)
        .replace(/@activeCount/g, activeCount)
        .replace(/@percent/g, percent)
        .replace(/@barColor/g, barColor)
        .replace(/@inactiveDays/g, inactiveDays);
      result = result + html;

      monthAllCount = monthAllCount + allCount;
      monthActiveCount = monthActiveCount + activeCount;
    }

    $("#membersRecords .card-body").html(result);
  }

  function addInactiveDays(days) {
    var result = "";
    var inactiveEl = templete.inactiveDays;
    if (days.length > 0) {
      if (days.length > 6) {
        days.length = 6;
      }
      for (var idx = 0; idx < days.length; idx++) {
        result += inactiveEl.replace(/@day/g, days[idx] + "일");
      }
    }
    return result;
  }

  // ================================
  // SET UI
  // ================================
  app.init = function() {
    RECOREDS_DATE = getRecordsDate();
    ACTIVE_MEMBER = getActiveMembers();
    MONTH_RECORDS = getMonthRecords();

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
