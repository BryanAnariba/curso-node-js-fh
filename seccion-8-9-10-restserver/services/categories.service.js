const { CategoryModel } = require( '../models' );

const findCategoryByName = async ( name ) => {
    return await CategoryModel.findOne({ name: name });
}

const createNewCategory = async ( category ) => {
    return await CategoryModel.create(category);
}

const findCategories = async ( skip = 0, limit = 10 ) => {
    return await CategoryModel.find().limit(limit).skip(skip).populate('user', 'userName');
}

const getTotalCategories = async () => {
    return await CategoryModel.countDocuments({ status: true });
}

const findCategoryById = async ( categoryId ) => {
    return await CategoryModel.findOne({ _id: categoryId }).populate('user').populate('user', 'userName');
}

const updateCategory = async ( categoryId, name ) => {
    return await CategoryModel.findByIdAndUpdate({ _id: categoryId }, { name: name }, { new: true }).populate('user');
}

const deleteCategory = async ( categoryId ) => {
    return await CategoryModel.findByIdAndUpdate({ _id: categoryId }, { status: false }, { new: true }).populate('user');
}

module.exports = {
    findCategoryByName,
    createNewCategory,
    findCategories,
    getTotalCategories,
    findCategoryById,
    updateCategory,
    deleteCategory,
}