var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'something@gmail.com',
        pass: 'djfbsd'
      }
});
    var mailOptions = {
      from: 'John Doe <johndoe@gmail.com>',
      to: 'something@gmail.com',
      subject: 'website submission',
      text: 'You have a new submission with following details...Name: '+req.body.name+ 'Email: '+req.body.email+ 'Messgae: '+req.body.message,
      html: '<p> You got a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
        res.redirect('/');
      }else{
        console.log('Message Sent:'+info.response);
        res.redirect('/');
      }
    });
});
module.exports = router;
