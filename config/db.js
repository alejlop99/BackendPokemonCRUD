const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const Connect_DB = async () => {

  try{

    await mongoose.connect(process.env.DB_MONGO,{

      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connect to database');


  }catch(err){

    console.error(err);
    process.exit(1);
  }

}

module.exports = Connect_DB;