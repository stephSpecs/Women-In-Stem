require('dotenv').config();
const pool = require('../config/db');

const updates = [
  {
    id: 'margaret-hamilton',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Margaret_Hamilton_-_restoration.jpg&width=300'
  },
  {
    id: 'hedy-lamarr',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Hedy_Lamarr_-_Screenland_(October_1942).png&width=300'
  },
  {
    id: 'annie-easley',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Annie_Easley_in_NASA.jpg&width=300'
  },
  {
    id: 'carol-shaw',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Carol_Shaw_Holding_Gold_River_Raid_Cartridge.jpg&width=300'
  },
  {
    id: 'gladys-west',
    image: 'https://static01.nyt.com/images/2026/01/29/obituaries/00west-topper-img-print3/00west-topper-img-master675.jpg'
  }
];

const run = async () => {
  try {
    for (const item of updates) {
      await pool.query('UPDATE women SET image = $1 WHERE id = $2', [item.image, item.id]);
      console.log(`Updated ${item.id}`);
    }
    console.log('Done!');
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

run();