'use strict';
module.exports.index  = function (req, res){
    console.log('Within the index controller');
    res.render('index');
};