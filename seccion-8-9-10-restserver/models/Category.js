const { Schema, model } = require( 'mongoose' );

const categoryEntity = new Schema({
    name: {
        type: String,
        required: [ true, 'Category Name is required' ],
        unique: true
    },
    status: {
        type: Boolean,
        default: true,
        required: [ true, 'Category Status is required' ]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model( 'Categories', categoryEntity );