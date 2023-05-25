const AWS=require('aws-sdk');

const deleteClient=async(event)=>{
  const dynamoDB=new AWS.DynamoDB.DocumentClient();
  const {id}=event.pathParameters;

  await dynamoDB.delete({
    TableName:"ClientTable",
    Key:{
      id
    }
  }).promise();

  return {
    status:200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
    message:'Client successfully removed'
  }
}

module.exports={
  deleteClient
}