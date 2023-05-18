const mongoose = require( 'mongoose' );

const dbConnection = async () => {
    return await mongoose.connect( `${ process.env.MONGO_URI }` );
}

module.exports = { dbConnection };