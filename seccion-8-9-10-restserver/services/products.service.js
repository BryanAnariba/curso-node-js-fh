const { productModel } = require( '../models' );

const findProductByName = async ( productName ) => {
    return await productModel.findOne({ productName: productName }); //.populate('User','userName').populate('Category','name');
}

const createNewProduct = async ( product ) => {
    return await productModel.create(product);
}

const findProducts = async ( limit, skip ) => {
    return await productModel.find().populate('user', 'userName').populate('category', 'name').limit(Number(limit)).skip(Number(skip));
}

const findProductById = async ( productId ) => {
    return await productModel.findOne({ _id: productId }).populate('user', 'userName').populate('category','name');
}

const editProduct = async ( productId, product ) => {
    return await productModel.findOneAndUpdate({ _id: productId }, product, { new: true });
}

const deleteProduct = async ( productId ) => {
    return await productModel.findOneAndUpdate({ _id: productId }, { status: false, isAvaliable: false }, { new: true } );
}

const findProductsByName = async ( term ) => {
    return await productModel.find({ 
        $or: [
            { productName: term }
        ],
        $and: [
            { status: true }
        ]
    }).populate('category', 'name');
}

module.exports = {
    findProductByName,
    createNewProduct,
    findProducts,
    findProductById,
    editProduct,
    deleteProduct,
    findProductsByName,
}
