var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
var sns = new AWS.SNS();

var params = {
    MessageAttributes: {
    'AWS.SNS.SMS.SMSType': {
       DataType: 'String',
       StringValue: 'Transactional'
      }
    },
  Message: 'this is a test message',
  PhoneNumber: '+919835915117'
};


sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});

