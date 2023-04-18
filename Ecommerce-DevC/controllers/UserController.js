const { request, response } = require("express");

const signIn = async ( req = request, res = response ) => {
    return res.status( 200 ).json({ statusCode: 200, data: '@SignIn is Working' });
}

module.exports = {
    signIn
}