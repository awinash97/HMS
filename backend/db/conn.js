const mongoose = require('mongoose')

const DB = process.env.DATABASE;


mongoose.connect(DB).then( () => {
    console.log('DataBase connected successfully')
}).catch( () => console.log('DataBase not connected'))