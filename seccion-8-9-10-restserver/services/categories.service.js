const { CategoryModel } = require( '../models' );

const findCategoryByName = async ( name ) => {
    return await CategoryModel.findOne({ name: name });
}

const createNewCategory = async ( category ) => {
    return await CategoryModel.create(category);
}

module.exports = {
    findCategoryByName,
    createNewCategory,
}