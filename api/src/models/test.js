const test = async () => {
  const User = require('./User');
  const database = require('../config/database')
   await database.sync();
};

test()