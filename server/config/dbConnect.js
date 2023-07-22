const { default: mongoose} = require('mongoose')
mongoose.set('strictQuery', false)
const dbConnect = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        if(connect.connection.readyState === 1) console.log("DB connection is successfully!")
        else console.log('Connection failed')
    }
    catch(error){
        console.log('DB connection failed')
        throw new Error(error)
    }
}

module.exports = dbConnect