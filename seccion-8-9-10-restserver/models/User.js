const { Schema, model } = require( 'mongoose' );

const userEntity = new Schema(
    {
        userName: {
            type: String,
            required: [ true, 'User Name is required' ]
        },
        userEmail: {
            type: String,
            required: [ true, 'User Email is required' ],
            unique: true
        },
        userPassword: {
            type: String,
            required: [ true, 'User Password is required' ],  
        },
        userImg: {
            type: String,
            default: ''
        },
        userRole: {
            type: String,
            required: [ true, 'User Role is required' ],
            enum: [ 'ADMIN', 'USER' ]
        },
        userStatus: {
            type: Boolean,
            default: true
        },
        isUserGoogleSigned: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

userEntity.methods.toJSON = function () {
    const { userPassword, ...user } = this.toObject();
    return user;

}

module.exports = model( 'User', userEntity );