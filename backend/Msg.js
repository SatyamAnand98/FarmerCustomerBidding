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
  Message: 'आपका सामान रूपये में खरीदने की अर्ज़ी ने डाली है।',
  PhoneNumber: '+919513868175'
};


sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});

