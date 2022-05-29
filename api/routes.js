'use strict';

const controller = require('./controller')

module.exports = (app)=>{
    app.route('/about').get(controller.about)
    app.route('/distance/:zipcode1/:zipcode2').get(controller.getDistance)
    app.route('/calculate/:num1/:num2').get(controller.getCalculate)
}