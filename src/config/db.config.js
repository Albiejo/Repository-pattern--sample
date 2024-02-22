const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mydb' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('successfully connected to the database');

})
.catch(err=>{
    console.error('error connecting to the daatabase' , err)
    process.exit();
})