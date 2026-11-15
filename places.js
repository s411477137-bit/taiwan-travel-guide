// 景點資料集中管理。新增景點時，請依照下方欄位格式新增一筆資料。
const places = [
  {
    id: "jiufen",
    name: "九份老街",
    city: "新北市",
    region: "北部",
    category: "老街文化",
    description: "沿著山城階梯散步，欣賞紅燈籠、茶樓與遠方海景，感受九份獨有的懷舊氣氛。",
    tip: "建議安排平日前往，傍晚可以欣賞山城點燈。",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    imageAlt: "山城與自然風景"
  },
  {
    id: "yangmingshan",
    name: "陽明山",
    city: "台北市",
    region: "北部",
    category: "自然風景",
    description: "擁有火山地形、草原與季節花景，是親近自然、享受山林空氣的好去處。",
    tip: "出發前可先確認花季與步道開放資訊。",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "山林湖泊風景"
  },
  {
    id: "sunmoonlake",
    name: "日月潭",
    city: "南投縣",
    region: "中部",
    category: "湖光山色",
    description: "湖面映照群山，適合搭船、騎自行車或沿著湖畔慢慢散步。",
    tip: "可以安排環湖自行車行程，欣賞不同角度的湖景。",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85",
    imageAlt: "湖泊與山景"
  },
  {
    id: "gaomei",
    name: "高美濕地",
    city: "台中市",
    region: "中部",
    category: "海岸夕陽",
    description: "寬廣的濕地與風車構成迷人景色，退潮時能欣賞天空與水面的倒影。",
    tip: "先查詢當日潮汐時間，再安排夕陽行程。",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=85",
    imageAlt: "夕陽下的自然景色"
  },
  {
    id: "anping",
    name: "安平老街",
    city: "台南市",
    region: "南部",
    category: "老街美食",
    description: "走進充滿歷史感的巷弄，品嚐在地小吃，也能順遊附近的古蹟與老屋。",
    tip: "適合安排半日散步，記得留點胃容量給台南小吃。",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    imageAlt: "街道與夕陽"
  },
  {
    id: "alishan",
    name: "阿里山",
    city: "嘉義縣",
    region: "南部",
    category: "森林山景",
    description: "森林鐵道、檜木林與雲海日出，讓旅人用不同節奏感受山林的寧靜。",
    tip: "山區氣溫較低，記得準備保暖衣物並確認交通資訊。",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "陽光灑落森林"
  },
  {
    id: "taroko",
    name: "太魯閣周邊",
    city: "花蓮縣",
    region: "東部",
    category: "峽谷山景",
    description: "花蓮山海景觀壯麗，出發前可先了解周邊開放狀況，選擇安全且開放的景點。",
    tip: "太魯閣國家公園部分區域可能因災後復原而管制，務必查詢官方最新公告。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "壯闊山脈景觀"
  },
  {
    id: "sanxiantai",
    name: "三仙台",
    city: "台東縣",
    region: "東部",
    category: "海岸風景",
    description: "海蝕地形與跨海拱橋形成台東代表性海岸風景，適合欣賞太平洋的遼闊。",
    tip: "海邊日照與風勢較強，建議做好防曬並留意天候。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "海岸與藍色海洋"
  }
];
