// 产品配置文件
// 只需修改这个文件就可以添加、修改或删除产品

export const products = [
  {
    id: 1,
    name: 'Adult Diapers',
    title: 'Premium Adult Diapers',
    description: 'High-quality adult diapers with excellent absorbency and comfort for daily use.',
    category: 'Personal Care',
    images: ['adultDiapers1.jpg', 'adultDiapers2.jpg']
  },
  {
    id: 2,
    name: 'Baby Diapers',
    title: 'Soft Baby Diapers',
    description: 'Gentle and soft baby diapers designed for sensitive skin, providing all-day protection.',
    category: 'Baby Care',
    images: ['babyDiapers1.jpg', 'babyDiapers2.jpg']
  },
  {
    id: 3,
    name: 'Baby Wipes',
    title: 'Gentle Baby Wipes',
    description: 'Hypoallergenic baby wipes with natural ingredients, safe for delicate baby skin.',
    category: 'Baby Care',
    images: ['babyWipers1.jpg', 'babyWipers2.jpg']
  },
  {
    id: 4,
    name: 'Blender',
    title: 'Multi-Function Blender',
    description: 'Powerful blender for smoothies, soups, and food preparation with multiple speed settings.',
    category: 'Kitchen Appliances',
    images: ['Blender1.jpg']
  },
  {
    id: 5,
    name: 'Dishwashing Soap',
    title: 'Efficient Dishwashing Soap',
    description: 'Strong cleaning power dishwashing soap that cuts through grease and leaves dishes sparkling.',
    category: 'Cleaning Products',
    images: ['dishwashingSoup.jpg']
  },
  {
    id: 6,
    name: 'Electric Kettle',
    title: 'Fast Boil Electric Kettle',
    description: 'Stainless steel electric kettle with auto shut-off and rapid boiling technology.',
    category: 'Kitchen Appliances',
    images: ['electricKettle.jpg']
  },
  {
    id: 7,
    name: 'Fly Trap',
    title: 'Effective Fly Trap',
    description: 'Non-toxic fly trap solution for indoor and outdoor use, safe for families and pets.',
    category: 'Home & Garden',
    images: ['flyTrap1.jpg']
  },
  {
    id: 8,
    name: 'HIV Test Kits',
    title: 'Rapid HIV Test Kits',
    description: 'Accurate and reliable HIV test kits for home use with easy-to-follow instructions.',
    category: 'Health & Medical',
    images: ['HIVTestKits1.jpg', 'HIVTestKits2.jpg']
  },
  {
    id: 9,
    name: 'Juicer',
    title: 'Professional Juicer',
    description: 'High-speed juicer that extracts maximum nutrients while preserving vitamins and minerals.',
    category: 'Kitchen Appliances',
    images: ['Juicer.jpg']
  },
  {
    id: 10,
    name: 'Laundry Detergent',
    title: 'Concentrated Laundry Detergent',
    description: 'Powerful laundry detergent that removes tough stains while keeping clothes soft and fresh.',
    category: 'Cleaning Products',
    images: ['laundryDetergent1.jpg', 'laundryDetergent2.jpg']
  },
  {
    id: 11,
    name: 'Pregnancy Test Kits',
    title: 'Early Detection Pregnancy Test',
    description: 'Highly sensitive pregnancy test kits with clear results and easy-to-read indicators.',
    category: 'Health & Medical',
    images: ['pregnancyTestKids1.jpg', 'pregnancyTestKids2.jpg']
  },
  {
    id: 12,
    name: 'Rice Cooker',
    title: 'Smart Rice Cooker',
    description: 'Multi-function rice cooker with automatic cooking modes for perfect rice every time.',
    category: 'Kitchen Appliances',
    images: ['riceCooker1.jpg', 'riceCooker2.jpg']
  },
  {
    id: 13,
    name: 'Sanitary Pads',
    title: 'Comfort Sanitary Pads',
    description: 'Ultra-absorbent sanitary pads with soft cotton surface for maximum comfort and protection.',
    category: 'Personal Care',
    images: ['sanitaryPads1.jpg', 'sanitaryPads2.jpg']
  },
  {
    id: 14,
    name: 'Solar Panel',
    title: 'High Efficiency Solar Panel',
    description: 'Premium solar panels with high conversion efficiency for residential and commercial use.',
    category: 'Energy Solutions',
    images: ['solarPanel.jpg']
  },
  {
    id: 15,
    name: 'Toothpaste',
    title: 'Whitening Toothpaste',
    description: 'Advanced whitening toothpaste that removes stains and protects against cavities.',
    category: 'Personal Care',
    images: ['toothpaste1.jpg']
  },
  {
    id: 16,
    name: 'Toothpaste Squeezer',
    title: 'Automatic Toothpaste Squeezer',
    description: 'Convenient toothpaste squeezer that gets every last drop, reducing waste and saving money.',
    category: 'Personal Care',
    images: ['toothpasteSqueezer1.jpg', 'toothpasteSqueezer2.jpg']
  },
  {
    id: 17,
    name: 'Wall Mounted Washing Machine',
    title: 'Compact Wall Mounted Washer',
    description: 'Space-saving wall mounted washing machine perfect for small apartments and RVs.',
    category: 'Home Appliances',
    images: ['wallMountedWM1.jpg', 'wallMountedWM2.jpg']
  },
  {
    id: 18,
    name: 'Wigs',
    title: 'Premium Quality Wigs',
    description: 'Natural-looking wigs made from high-quality synthetic or human hair with various styles.',
    category: 'Fashion & Beauty',
    images: ['wigs1.jpg', 'wigs2.jpg']
  },
  {
    id: 19,
    name: 'Air Purifier',
    title: 'HEPA Air Purifier',
    description: 'Advanced HEPA air purifier that removes 99.97% of airborne particles, allergens, and pollutants for cleaner indoor air.',
    category: 'Home Appliances',
    images: ['airPurifier.jpg']
  },
  {
    id: 20,
    name: 'Water Purifier',
    title: 'Multi-Stage Water Purifier',
    description: 'High-performance water purifier with multi-stage filtration system for clean, safe, and great-tasting drinking water.',
    category: 'Home Appliances',
    images: ['waterPurifier1.jpg', 'waterPurifier2.jpg']
  }
]

// 获取所有唯一的分类
export const categories = ['ALL', ...new Set(products.map(p => p.category))]

// 根据图片文件名获取完整路径
export const getImagePath = (imageName) => {
  return `/productPictures/${imageName}`
}

