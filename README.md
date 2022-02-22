# SQS

- Use Serverless framework to create lambda function with SQS trigger
  ```yaml
  functions:
  sqsHello:
    handler: handler.sqshello
    memorySize: 128
    events:
      - sqs:
          arn: 
            Fn::GetAtt:
              - MyQueue
              - Arn
          batchSize: 10
  ```
---

- Use Resources in Serverless.yml to create the SQS queue which triggers the function
  ```yaml
  resources:
  Resources:
    MyQueue:
      Type: "AWS::SQS::Queue"
      Properties:
        QueueName: "MyQueue"
  ```
  
---

- Use AWS console to send a message to the queue

[![](https://github.com/x0rCTF/SQS/blob/main/images/sendmessage.png)](https://github.com/x0rCTF/SQS/blob/main/images/sendmessage.png)

---

- Show CloudWatch logs from the triggered lambda function

[![](https://github.com/x0rCTF/SQS/blob/main/images/logs.png)](https://github.com/x0rCTF/SQS/blob/main/images/logs.png)
