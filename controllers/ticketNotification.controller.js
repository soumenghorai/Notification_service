const ticketNotificationModel = require('../models/ticketNotification.model')

exports.acceptNotificationRequest = async (req, res) => {
    const notificationObject = {
        ticketId: req.body.ticketId,
        subject: req.body.subject,
        content: req.body.content,
        recepientEmails: req.body.recepientEmails,
        requester: req.body.requester
    }

    try{
        const notification = await ticketNotificationModel.create(notificationObject)

        if(notification){
            return res.status(201).send({
                requestId: notification._id,
                message: "Request has been accepted. Check status later by using the provided requestId"
            })
        }
    }catch(err){
        return res.status(500).send({
            message: "Some internal server error occured"
        })
    }
}

exports.getNotification = async (req, res) => {
    try {
        let ticket = await ticketNotificationModel.findById(req.params.id);
        if (ticket) {
          return res.status(200).send(ticket);
        } else {
          return res.status(200).send("ticket not found");
        }
      } catch (err) {
        return res.status(500).send("Internal Error");
      }
}