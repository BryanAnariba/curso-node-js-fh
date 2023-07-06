const categoryEntity = require( './Category' );
const productEntity = require('./Product');
const roleEntity = require( './Role' );
const userEntity = require( './User' );

module.exports = {
    CategoryModel: categoryEntity,
    productModel: productEntity,
    RoleModel: roleEntity,
    UserModel: userEntity,
}