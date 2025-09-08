const mongoose = require('mongoose')
const {MONGODB_URL} = require('./config')

const connect = async() =>{
    try{
        await mongoose.connect(MONGODB_URL)
        console.log('Success')
    }
    catch(error){
        if(error.name === 'MongooseServerSelectionError'){
            console.log('Check your Mongo Server')
        }
        else{
            console.log('failed to database connection',error)
        }
        process.exit(1)
    }
}
module.exports = connect;