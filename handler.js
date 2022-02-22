'use strict';

module.exports.sqshello = async (event) => {
  console.log(JSON.stringify(event))
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
