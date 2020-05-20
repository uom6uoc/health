var example = {
  0: {
    choigeul: { active: true, exercise: {} },
    gwayeok: { active: true, exercise: {} },
    manggu: { active: true, exercise: {} },
    ssaekgeun: { active: true, exercise: {} },
    ssapjong: { active: true, exercise: {} },
    holtti: { active: true, exercise: {} },
  },
};

var _file_records = {
  2020: {
    5: {
      20: {
        choigeul: { active: true, exercise: { something: "푸셥, 스쿼트, 턱걸이, 라이딩" } },
        gwayeok: { active: true, exercise: { sit_plank: [150], something: "풋살" } },
        manggu: { active: true, exercise: { squat: [217] } },
        ssaekgeun: { active: true, exercise: { military_press: [4, 100] } },
        ssapjong: { active: true, exercise: { running: [432, 1.5] } },
        holtti: { active: true, exercise: { sit_plank: [30], chinup: [3], nagative: 6, ab_rollout: [20] } },
      },
      19: {
        choigeul: { active: true, exercise: { pushup: [20] } },
        gwayeok: { active: true, exercise: { sit_plank: [115] } },
        manggu: { active: true, exercise: { pushup: [10] } },
        ssaekgeun: { active: true, exercise: { pushup: [30] } },
        ssapjong: { active: true, exercise: { running: [252, 1.0] } },
        holtti: { active: true, exercise: { running: [20], chinup: [3] } },
      },
      18: {
        choigeul: { active: true, exercise: { squat: [22] } },
        gwayeok: { active: true, exercise: { pushup: [13] } },
        manggu: { active: true, exercise: { pushup: [10] } },
        ssaekgeun: { active: true, exercise: { chinup: [11] } },
        ssapjong: { active: true, exercise: { running: [109, 0.49] } },
        holtti: { active: true, exercise: { ab_rollout: [18], pushup: [30] } },
      },
      17: {
        choigeul: { active: true, exercise: { pushup: [20] } },
        gwayeok: { active: true, exercise: { pushup: [20] } },
        manggu: { active: true, exercise: { pushup: [28], sit_plank: [60] } },
        ssaekgeun: { active: true, exercise: { pushup: [63] } },
        ssapjong: { active: true, exercise: { sit_plank: [17] } },
        holtti: { active: true, exercise: { pushup: [15] } },
      },
      16: {
        choigeul: { active: true, exercise: { chinup: [20] } },
        gwayeok: { active: true, exercise: { chinup: [13] } },
        manggu: { active: true, exercise: { pushup: [30] } },
        ssaekgeun: { active: true, exercise: { chinup: [18] } },
        ssapjong: { active: true, exercise: { something: "계단오르기 200개왕복" } },
        holtti: { active: true, exercise: { pushup: [37] } },
      },
      15: {
        choigeul: { active: true, exercise: { squat: [73] } },
        gwayeok: { active: true, exercise: { squat: [276], plank: [270] } },
        manggu: { active: true, exercise: { pushup: [28] } },
        ssaekgeun: { active: true, exercise: { pushup: [35] } },
        ssapjong: { active: true, exercise: { squat: [49] } },
        holtti: { active: true, exercise: { squat: [236], pushup: [12], ab_rollout: [15] } },
      },
      14: {
        choigeul: { active: true, exercise: { pushup: [20] } },
        gwayeok: { active: true, exercise: { crunch: [15], ab_rollout: [12], plank: [140] } },
        manggu: { active: true, exercise: { pushup: [19] } },
        ssaekgeun: { active: true, exercise: { pushup: [59] } },
        ssapjong: { active: true, exercise: { pushup: [20] } },
        holtti: { active: true, exercise: { squat: [146], ab_rollout: [12], pushup: [20] } },
      },
      13: {
        choigeul: { active: true, exercise: { pushup: [14], pushup: [15], squat: [50] } },
        gwayeok: { active: true, exercise: { something: "풋살", pushup: [20] } },
        manggu: { active: true, exercise: { pushup: [4] } },
        ssaekgeun: { active: true, exercise: { pushup: [40] } },
        ssapjong: { active: true, exercise: { sit_plank: [10] } },
        holtti: { active: true, exercise: { pushup: [20] } },
      },
      12: {
        choigeul: { active: true, exercise: { pushup: [10] } },
        gwayeok: { active: true, exercise: { something: "아령 20회" } },
        manggu: { active: true, exercise: { pushup: [18] } },
        ssaekgeun: { active: true, exercise: { chinup: [16] } },
        ssapjong: { active: true, exercise: { squat: [15] } },
        holtti: { active: false, exercise: {} },
      },
      11: {
        choigeul: { active: true, exercise: { chinup: [12] } },
        gwayeok: { active: true, exercise: { pushup: [46], ab_rollout: [20], running: [3015, 10.76] } },
        manggu: { active: true, exercise: { squat: [206] } },
        ssaekgeun: { active: true, exercise: { pushup: [50] } },
        ssapjong: { active: true, exercise: { pushup: [35] } },
        holtti: { active: true, exercise: { squat: [100], pushup: [17], running: [1736, 4.45] } },
      },
      10: {
        choigeul: { active: true, exercise: { something: "고무줄 당기기 20회", chinup: [19] } },
        gwayeok: { active: true, exercise: { chinup: [11], superman: [20] } },
        manggu: { active: true, exercise: { pushup: [20] } },
        ssaekgeun: { active: true, exercise: { bench_press: [5, 80], leg_press: [5, 200] } },
        ssapjong: { active: true, exercise: { superman: [20] } },
        holtti: { active: true, exercise: { pushup: [30] } },
      },
      9: {
        choigeul: { active: true, exercise: { chinup: [12] } },
        gwayeok: { active: true, exercise: { pushup: [35] } },
        manggu: { active: true, exercise: { pushup: [20] } },
        ssaekgeun: { active: true, exercise: { chinup: [15] } },
        ssapjong: { active: true, exercise: { chinup: [3] } },
        holtti: { active: true, exercise: { pushup: [30] } },
      },
      8: {
        choigeul: { active: true, exercise: { something: "고무줄 당기기 20회" } },
        gwayeok: { active: true, exercise: { pushup: [40] } },
        manggu: { active: true, exercise: { pushup: [15] } },
        ssaekgeun: { active: true, exercise: { something: "족구" } },
        ssapjong: { active: true, exercise: { squat: [15] } },
        holtti: { active: true, exercise: { plank: [110] } },
      },
      7: {
        choigeul: { active: true, exercise: { chinup: [16], running: [2201, 6.03] } },
        gwayeok: { active: true, exercise: { chinup: [12], ab_rollout: [15] } },
        manggu: { active: true, exercise: { pushup: [13], plank: [100] } },
        ssaekgeun: { active: true, exercise: { military_press: [3, 100] } }, // military_press: [5, 90]
        ssapjong: { active: true, exercise: { chinup: [4] } },
        hotjae: { active: "leave" },
        holtti: { active: true, exercise: { chinup: [3], plank: [105] } },
      },
      6: {
        choigeul: { active: true, exercise: { pushup: [15] } },
        gwayeok: { active: true, exercise: { something: "풋살" } },
        manggu: { active: true, exercise: { squat: [100], plank: [90] } },
        ssaekgeun: { active: true, exercise: { super_369: [4] } },
        ssapjong: { active: true, exercise: { something: "공원 달리기" } },
        hotjae: { active: true, exercise: { something: "계단오르기 18층" } },
        holtti: { active: "join" },
      },
      5: {
        choigeul: { active: true, exercise: { squat: [100] } },
        gwayeok: { active: true, exercise: { plank: [310] } },
        manggu: { active: true, exercise: { squat: [18] } },
        ssaekgeun: { active: true, exercise: { something: "51015 슈퍼세트 5회" } },
        ssapjong: { active: true, exercise: { pushup: [24] } },
        hotjae: { active: true, exercise: { something: "계단오르기 18층" } },
      },
      4: {
        choigeul: { active: true, exercise: { pushup: [11], nagative: [2] } },
        gwayeok: { active: true, exercise: { running: [2723, 9.72], walking: [1.11] } },
        manggu: { active: true, exercise: { pushup: [12], squat: [16] } },
        ssaekgeun: { active: true, exercise: { super_369: [3] } },
        ssapjong: { active: true, exercise: { pushup: [30] } },
        hotjae: { active: true, exercise: { running: [1752, 4.01] } },
      },
      3: {
        choigeul: { active: true, exercise: { riding: [14.76], pushup: [10] } },
        gwayeok: { active: true, exercise: { chinup: [11], ab_rollout: [12] } },
        manggu: { active: true, exercise: { pushup: [20], situp: [8] } },
        ssaekgeun: { active: true, exercise: { chinup: [14] } },
        ssapjong: { active: true, exercise: { pushup: [30] } },
        hotjae: { active: true, exercise: { running: [1982, 3.18] } },
      },
      2: {
        choigeul: { active: true, exercise: { riding: [10.32] } },
        gwayeok: { active: true, exercise: { pushup: [44], squat: [106] } },
        manggu: { active: true, exercise: { pushup: [8] } },
        ssaekgeun: { active: true, exercise: { bench_press: [10, 70] } },
        ssapjong: { active: true, exercise: { something: "계단오르기 120개" } },
        hotjae: { active: "join", exercise: { running: [1640, 4.0] } },
      },
      1: {
        choigeul: { active: "join", exercise: { nagative: [1] } },
        gwayeok: { active: "join", exercise: { walking: [16.16] } },
        manggu: { active: "join", exercise: { plank: [35] } },
        ssaekgeun: { active: "join", exercise: { military_press: [2, 100] } },
        ssapjong: { active: "join", exercise: { situp: [30] } },
      },
    },
  },
};
