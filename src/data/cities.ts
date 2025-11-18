export interface Attraction {
  name: string;
  description: string;
}

export interface City {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [latitude, longitude]
  position: { x: number; y: number }; // For card layout
  image: string;
  attractions: Attraction[];
  altitude: string;
  climate: string;
  bestSeason: string;
  specialty: string;
}

export const cities: City[] = [
  {
    id: 'kunming',
    name: '昆明',
    description: '春城昆明，四季如春，是云南省会和重要的旅游城市',
    coordinates: [25.0406, 102.7129],
    position: { x: 45, y: 55 },
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '石林风景区', description: '世界自然遗产，喀斯特地貌奇观，被誉为"天下第一奇观"' },
      { name: '滇池', description: '云南最大的淡水湖，红嘴鸥的冬季栖息地' },
      { name: '翠湖公园', description: '昆明市区最美的城市公园，四季花开' },
      { name: '西山龙门', description: '俯瞰滇池全景的最佳观景点' }
    ],
    altitude: '1891米',
    climate: '亚热带',
    bestSeason: '全年',
    specialty: '过桥米线'
  },
  {
    id: 'dali',
    name: '大理',
    description: '风花雪月的浪漫之城，苍山洱海间的诗意栖居',
    coordinates: [25.6067, 100.2672],
    position: { x: 25, y: 45 },
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '洱海', description: '云南第二大淡水湖，环海骑行是最佳体验方式' },
      { name: '苍山', description: '十九峰十八溪，雪山与森林的完美结合' },
      { name: '大理古城', description: '保存完好的白族古城，充满文艺气息' },
      { name: '崇圣寺三塔', description: '大理的标志性建筑，千年佛教圣地' }
    ],
    altitude: '1976米',
    climate: '高原季风',
    bestSeason: '3-5月',
    specialty: '白族三道茶'
  },
  {
    id: 'lijiang',
    name: '丽江',
    description: '世界文化遗产古城，纳西文化的发源地',
    coordinates: [26.8557, 100.2204],
    position: { x: 30, y: 30 },
    image: 'https://images.pexels.com/photos/2412606/pexels-photo-2412606.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '丽江古城', description: '世界文化遗产，保存最完整的少数民族古城' },
      { name: '玉龙雪山', description: '纳西族的神山，海拔5596米的雪山奇观' },
      { name: '泸沽湖', description: '高原明珠，摩梭人的母系社会文化' },
      { name: '束河古镇', description: '比丽江古城更安静的茶马古道重镇' }
    ],
    altitude: '2418米',
    climate: '高原季风',
    bestSeason: '4-5月',
    specialty: '纳西烤鱼'
  },
  {
    id: 'shangri-la',
    name: '香格里拉',
    description: '人间天堂，藏传佛教文化的圣地',
    coordinates: [27.8269, 99.7065],
    position: { x: 35, y: 15 },
    image: 'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '普达措国家公园', description: '中国大陆首个国家公园，原始森林与高山湖泊' },
      { name: '松赞林寺', description: '云南最大的藏传佛教寺院，小布达拉宫' },
      { name: '独克宗古城', description: '茶马古道上的重镇，藏族文化体验地' },
      { name: '梅里雪山', description: '藏区八大神山之首，日照金山奇观' }
    ],
    altitude: '3280米',
    climate: '高原山地',
    bestSeason: '5-7月',
    specialty: '酥油茶'
  },
  {
    id: 'xishuangbanna',
    name: '西双版纳',
    description: '热带雨林天堂，傣族文化的璀璨明珠',
    coordinates: [22.0089, 100.7979],
    position: { x: 55, y: 85 },
    image: 'https://images.pexels.com/photos/3225530/pexels-photo-3225530.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '野象谷', description: '中国唯一能观赏到野生亚洲象的地方' },
      { name: '中科院热带植物园', description: '中国最大的热带植物园，植物王国' },
      { name: '曼听公园', description: '傣王御花园，体验傣族文化的最佳地点' },
      { name: '告庄西双景', description: '现代傣族风情街区，夜市繁华' }
    ],
    altitude: '552米',
    climate: '热带雨林',
    bestSeason: '11-4月',
    specialty: '傣味烧烤'
  },
  {
    id: 'tengchong',
    name: '腾冲',
    description: '火山热海之城，翡翠之都',
    coordinates: [25.0205, 98.4974],
    position: { x: 15, y: 35 },
    image: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '火山地质公园', description: '中国四大火山群之一，地质奇观' },
      { name: '热海温泉', description: '中国三大地热区之一，大滚锅奇观' },
      { name: '和顺古镇', description: '中国十大魅力名镇，侨乡文化' },
      { name: '银杏村', description: '秋季金黄银杏的童话世界' }
    ],
    altitude: '1640米',
    climate: '亚热带季风',
    bestSeason: '10-11月',
    specialty: '大救驾'
  },
  {
    id: 'yuanyang',
    name: '元阳',
    description: '哈尼梯田的壮美画卷，摄影师的天堂',
    coordinates: [23.2197, 102.8348],
    position: { x: 50, y: 70 },
    image: 'https://images.pexels.com/photos/3225527/pexels-photo-3225527.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '哈尼梯田', description: '世界文化遗产，千年农耕文明的杰作' },
      { name: '多依树梯田', description: '观赏日出的最佳地点，云海梯田' },
      { name: '老虎嘴梯田', description: '最壮观的梯田景观，日落绝美' },
      { name: '箐口民俗村', description: '体验哈尼族传统文化的村落' }
    ],
    altitude: '1880米',
    climate: '亚热带山地',
    bestSeason: '11-3月',
    specialty: '哈尼长街宴'
  },
  {
    id: 'puzhehei',
    name: '普者黑',
    description: '喀斯特山水田园，《三生三世》取景地',
    coordinates: [24.1667, 104.1167],
    position: { x: 65, y: 60 },
    image: 'https://images.pexels.com/photos/3225526/pexels-photo-3225526.jpeg?auto=compress&cs=tinysrgb&w=800',
    attractions: [
      { name: '普者黑湖', description: '喀斯特湖泊群，荷花盛开的水上世界' },
      { name: '青龙山', description: '俯瞰普者黑全景的最佳观景台' },
      { name: '仙人洞', description: '喀斯特溶洞奇观，钟乳石林立' },
      { name: '天鹅湖', description: '候鸟栖息地，生态湿地公园' }
    ],
    altitude: '1450米',
    climate: '亚热带季风',
    bestSeason: '6-9月',
    specialty: '荷叶粥'
  }
];

// Yunnan province center coordinates
export const YUNNAN_CENTER: [number, number] = [25.0, 101.5];
