const { model, Schema } = require( 'mongoose' );

const roleEntity = new Schema(
    {
        roleName: {
            type: String,
            required: [ true, 'Role is required' ]  
        },
        roleDescription: {
            type: String,
            required: [ true, 'Role is required' ]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model( 'Roles', roleEntity );