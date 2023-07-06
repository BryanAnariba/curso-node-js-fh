const { Schema, model } = require( 'mongoose' );

const productEntity = new Schema(
    {
        productName: {
            type: String,
            required: [ true, 'Product Name is required' ]
        },
        status: {
            type: Boolean,
            required: [ true, 'Product Status is required' ],
            default: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [ true, 'User is required' ]
        },
        productPrice: {
            type: Number,
            deafult: 0,
        },
        category: {
            type: Schema.Types.ObjectId,
            red: 'Category',
            required: [ true, 'Category is required' ]
        },
        productDescription: {
            type: String,
            required: [ true, 'Product Description is required' ],
        },
        isAvaliable: {
            type: Boolean,
            default: true,
            required: [ true, 'Avaliability is required' ]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model( 'Product', productEntity );