/* 题目 */
// const title = `1、以下共有10题，每一题有四项选择。在这四项选择中，给你认为最能描述你的词句填上4分；给下一个3分；再次一个2分；给最不像你的描述填上1分。每一题中，分数不能相同，只能各为4，3，2，或1。`
const title = `1、以下共有10题，每一题有四项选择。在这四项选择中，按你认为最适合你的特征<strong>依次点击</strong>（四个都要点，最符合的先点，最不符合的最后点）。`

/* 选项 */
const selectionData = [{
  indexNum: 0,
  select: [
    {
      initSelect: false,
      val: '很有权威'
    },
    {
      initSelect: false,
      val: '热情主动'
    },
    {
      initSelect: false,
      val: '情感敏锐'
    },
    {
      initSelect: false,
      val: '重视指示'
    }
  ]
},
{
  indexNum: 1,
  select: [
    {
      initSelect: false,
      val: '掌握主控'
    },
    {
      initSelect: false,
      val: '爱好冒险'
    },
    {
      initSelect: false,
      val: '忠于所托'
    },
    {
      initSelect: false,
      val: '讲求准确'
    }
  ]
},
{
  indexNum: 2,
  select: [
    {
      initSelect: false,
      val: '意志坚定'
    },
    {
      initSelect: false,
      val: '目标远大'
    },
    {
      initSelect: false,
      val: '冷静稳重'
    },
    {
      initSelect: false,
      val: '坚持一贯'
    }
  ]
},
{
  indexNum: 3,
  select: [
    {
      initSelect: false,
      val: '雄心壮志'
    },
    {
      initSelect: false,
      val: '滔滔不绝'
    },
    {
      initSelect: false,
      val: '循例行事'
    },
    {
      initSelect: false,
      val: '可预测的'
    }
  ]
},
{
  indexNum: 4,
  select: [
    {
      initSelect: false,
      val: '具竞争力'
    },
    {
      initSelect: false,
      val: '乐于推广'
    },
    {
      initSelect: false,
      val: '不好改变'
    },
    {
      initSelect: false,
      val: '讲究实际'
    }
  ]
},
{
  indexNum: 5,
  select: [
    {
      initSelect: false,
      val: '挑战困难'
    },
    {
      initSelect: false,
      val: '善于社交'
    },
    {
      initSelect: false,
      val: '乐意配合'
    },
    {
      initSelect: false,
      val: '注重事实'
    }
  ]
},
{
  indexNum: 6,
  select: [
    {
      initSelect: false,
      val: '要求成果'
    },
    {
      initSelect: false,
      val: '欢愉开朗'
    },
    {
      initSelect: false,
      val: '避免对立'
    },
    {
      initSelect: false,
      val: '谨慎小心'
    }
  ]
},
{
  indexNum: 7,
  select: [
    {
      initSelect: false,
      val: '勇往直前'
    },
    {
      initSelect: false,
      val: '喜好变化'
    },
    {
      initSelect: false,
      val: '具同情心'
    },
    {
      initSelect: false,
      val: '完美主义'
    }
  ]
},
{
  indexNum: 8,
  select: [
    {
      initSelect: false,
      val: '果断坚决'
    },
    {
      initSelect: false,
      val: '想到就做'
    },
    {
      initSelect: false,
      val: '顾念他人'
    },
    {
      initSelect: false,
      val: '精益求精'
    }
  ]
},
{
  indexNum: 9,
  select: [
    {
      initSelect: false,
      val: '坚持已见'
    },
    {
      initSelect: false,
      val: '激励启发'
    },
    {
      initSelect: false,
      val: '和平调节'
    },
    {
      initSelect: false,
      val: '善于分析'
    }
  ]
}
]

/* 结论数据 */
const conclusionData = [
  [
    '带领者',
    '发起改变',
    '结果、挑战',
    '办成事情',
    '不敏感、没耐心',
    '倾听'
  ],
  [
    '启发者',
    '激发激情',
    '认可、肯定',
    '鼓励别人',
    '冲动、不重视细节',
    '暂停'
  ],
  [
    '支持者',
    '建立关系',
    '关系、团队和谐',
    '好队员',
    '不主动、为和谐牺牲结果',
    '主动'
  ],
  [
    '计算者',
    '追求卓越',
    '质量、卓越',
    '精准、准确',
    '过于深入、不能按照时间计划进行',
    '做抉择'
  ]
]
const conclusionDetailTitle = [
  '特点',
  '对他人的价值',
  '驱动力',
  '强项',
  '弱项',
  '进步途径'
]
export default {
  selectionData,
  conclusionData,
  conclusionDetailTitle,
  title
}
