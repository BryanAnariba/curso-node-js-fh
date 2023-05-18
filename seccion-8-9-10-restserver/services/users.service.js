const { UserModel } = require( '../models' );

const createUser = async ( userData ) => {
    return await UserModel.create( userData );
}

module.exports = {
    createUser,
}