(function (root) {
  "use strict"; // Start of use strict

  var templete = {};

  templete.award = `  <div class="item">
    <span class="icon">
      <i class="fas fa-award"></i>
    </span>
    <span class="text who">@who</span>
    <span class="text title">@title</span>
    <span class="icon none">
      <i class="fas fa-award"></i>
    </span>
    <span class="text record">@record</span>
    <span class="text time">@time</span>
  </div>`;

  templete.memberRecords = `  <h4 class="small font-weight-bold">
    @name
    <div class="float-right">[ <span>@activeCount</span> / <span>@allCount</span> ]</div>
  </h4>
  <div class="progress mb-4">
    <div
      class="progress-bar @barColor"
      role="progressbar"
      style="width: @percent%;"
      aria-valuenow="@activeCount"
      aria-valuemin="0"
      aria-valuemax="@allCount"
    ></div>
  </div>`;

  root.templete = templete;
})(this);
