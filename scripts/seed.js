console.log('Script started');
require('dotenv').config();
const pool = require('../config/db');
const women = require('../data/tools');

const createTableQuery = `
  DROP TABLE IF EXISTS women;
  CREATE TABLE women (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    field VARCHAR(100) NOT NULL,
    era VARCHAR(50) NOT NULL,
    contribution TEXT NOT NULL,
    description TEXT NOT NULL,
    fun_fact TEXT NOT NULL,
    image TEXT NOT NULL
  );
`;

const seed = async () => {
  try {
    await pool.query(createTableQuery);
    console.log('Table created!');

    for (const woman of women) {
      await pool.query(
        `INSERT INTO women (id, name, field, era, contribution, description, fun_fact, image)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [woman.id, woman.name, woman.field, woman.era, woman.contribution, woman.description, woman.fun_fact, woman.image]
      );
      console.log(`Inserted ${woman.name}`);
    }

    console.log('Seeding complete!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    pool.end();
  }
};

seed();