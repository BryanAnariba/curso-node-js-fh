const { UserModel } = require( '../models' );

const createUser = async ( userData ) => {
    return await UserModel.create( userData );
}

const findUserByEmail = async ( userEmail ) => {
    return await UserModel.findOne({ userEmail: userEmail });
}

const findUserByNameOrEmail = async ( term ) => {
    return await UserModel.find({ 
        $or: [
            {userName: term},
            {userEmail: term},
        ],
        $and: [
            { userStatus: true }
        ]
    });
}

const updateUserData = async ( userId, userData ) => {
    return await UserModel.findOneAndUpdate( { _id: userId }, userData, { new: true } );
}

const findUserById = async ( userId ) => {
    return await UserModel.findOne({ _id: userId, userStatus: true });
}

const getAllUsers = async ( limit = 10, skip = 0 ) => {
    return await UserModel.find().limit( limit ).skip( skip );
}

const getTotalUsers = async () => {
    return await UserModel.countDocuments({ userStatus: true });
}

const deleteUser = async ( userId ) => {
    return await UserModel.findByIdAndUpdate({ _id: userId }, { userStatus: false }, { new: true });
}

module.exports = {
    createUser,
    findUserByEmail,
    updateUserData,
    findUserById,
    getAllUsers,
    getTotalUsers,
    deleteUser,
    findUserByNameOrEmail,
}