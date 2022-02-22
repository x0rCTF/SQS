# SQS

- Use Serverless framework to create lambda function with SQS trigger
[![](https://github.com/x0rCTF/SQS/blob/main/images/trigger.png)](https://github.com/x0rCTF/SQS/blob/main/images/trigger.png)
- Use Resources in Serverless.yml to create the SQS queue which triggers the function
  ```yaml
  resources:
  Resources:
    MyQueue:
      Type: "AWS::SQS::Queue"
      Properties:
        QueueName: "MyQueue"
  ```
- Use AWS console to send a message to the queue
[![](https://github.com/x0rCTF/SQS/blob/main/images/sendmessage.png)](https://github.com/x0rCTF/SQS/blob/main/images/sendmessage.png)
- Show CloudWatch logs from the triggered lambda function
[![](https://github.com/x0rCTF/SQS/blob/main/images/logs.png)](https://github.com/x0rCTF/SQS/blob/main/images/logs.png)
