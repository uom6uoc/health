(function(root) {
  var calculator = {};
  var exercise_name = {
    military_press: "밀리터리 프레스",
    bench_press: "벤치 프레스",
    leg_press: "레그 프레스",
    nagative: "네거티브",

    chinup: "턱걸이",
    situp: "윗몸일으키기",
    pushup: "푸쉬업",
    ab_rollout: "AB 롤아웃",
    squat: "스쿼트",

    plank: "플랭크",
    superman: "슈퍼맨",
    bridge_updown: "브릿지 업다운",

    walking: "걷기",
    running: "달리기",
    riding: "라이딩", //type: ["time", "distance"],

    super_369: "369 슈퍼세트",
    something: "미등록",
  };

  var category = {
    military_press: {
      name: "밀리터리 프레스",
      record: {
        type: ["weight", "count"],
        unit: ["kg", "ea"],
        point: "a^5*b",
        correction: 1,
      },
    },
    bench_press: {
      name: "벤치 프레스",
      record: {
        type: ["weight", "count"],
        unit: ["kg", "ea"],
        point: "a^5*b",
        correction: 1,
      },
    },
    leg_press: {
      name: "레그 프레스",
      record: {
        type: ["weight", "count"],
        unit: ["kg", "ea"],
        point: "a^5*b",
        correction: 1,
      },
    },
    nagative: {
      name: "네거티브",
      record: {
        type: ["count"],
        unit: ["ea"],
        point: "a",
        correction: 1,
      },
    },
    chinup: {
      name: "턱걸이",
      record: {
        type: ["count"],
        unit: ["ea"],
        point: "a",
        correction: 1,
      },
    },
    situp: {
      name: "윗몸일으키기",
      record: {
        type: ["count"],
        unit: ["ea"],
        point: "a",
        correction: 1,
      },
    },
    pushup: {
      name: "푸쉬업",
      record: {
        type: ["count"],
        unit: ["ea"],
        point: "a",
        correction: 1,
      },
    },
    ab_rollout: {
      name: "AB 롤아웃",
      record: {
        type: ["count"],
        unit: ["ea"],
        point: "a",
        correction: 1,
      },
    },
    squat: {
      name: "스쿼트",
      record: {
        type: ["count"],
        unit: ["ea"],
        point: "a",
        correction: 1,
      },
    },
    plank: {
      name: "플랭크",
      record: {
        type: ["time"],
        unit: ["s"],
        point: "a",
        correction: 1,
      },
    },

    superman: {
      name: "슈퍼맨",
      record: {
        type: ["time"],
        unit: ["s"],
        point: "a",
        correction: 1,
      },
    },
    bridge_updown: {
      name: "브릿지 업다운",
      record: {
        type: ["count"],
        unit: ["s"],
        point: "a",
        correction: 1,
      },
    },
    walking: {
      name: "걷기",
      record: {
        type: ["distance"],
        unit: ["km"],
        point: "a",
        correction: 1,
      },
    },
    running: {
      name: "달리기",
      record: {
        type: ["time", "distance"],
        unit: ["s"],
        point: "a",
        correction: 1,
      },
    },
    riding: {
      name: "라이딩",
      record: {
        type: ["distance"],
        unit: ["km"],
        point: "a",
        correction: 1,
      },
    },

    super_369: {
      name: "369 슈퍼세트",
      record: {
        type: ["count"],
        unit: ["set"],
        point: "a",
        correction: 1,
      },
    },

    something: {
      name: "미등록",
      record: {
        type: ["none"],
        unit: ["none"],
        point: 1,
      },
    },
  };
})(this);
