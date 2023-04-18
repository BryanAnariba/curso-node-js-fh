const mongoose = require( 'mongoose' );

const dbConnect = async () => {
    return await mongoose.connect( `${ process.env.MONGO_URL }` );
}

module.exports = {
    dbConnect
}