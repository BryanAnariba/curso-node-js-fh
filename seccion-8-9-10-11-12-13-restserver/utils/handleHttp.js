const { response } = require("express");

const handleHttpError = ( res = response, statusCode, error, errorMessage ) => {
    res.status( statusCode ).json({ 
        statusCode: statusCode, 
        data: { 
            error: error, 
            errorMessage: errorMessage
        } 
    });
}

module.exports = {
    handleHttpError,
}