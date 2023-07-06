const { productModel } = require( '../models' );

const findProductByName = async ( productName ) => {
    return await productModel.findOne({ productName: productName }); //.populate('User','userName').populate('Category','name');
}

const createNewProduct = async ( product ) => {
    return await productModel.create(product);
}

module.exports = {
    findProductByName,
    createNewProduct,
}
