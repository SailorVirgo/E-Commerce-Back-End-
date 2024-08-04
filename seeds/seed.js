const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

const categoryData = require('./category-seeds.json');
const productData = require('./product-seeds.json');
const tagData = require('./tag-seeds.json');
const productTagData = require('./product-tag-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  await Product.bulkCreate(productData);
  await Tag.bulkCreate(tagData);
  await ProductTag.bulkCreate(productTagData);

  process.exit(0);
};

seedDatabase();
