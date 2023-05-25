const notificationController = require('../controllers/ticketNotification.controller')

module.exports = function(app){
    app.post('/notificationService/api/v1/notification', notificationController.acceptNotificationRequest);
    app.get('/notificationService/api/v1/notification/:id', notificationController.getNotification);
}