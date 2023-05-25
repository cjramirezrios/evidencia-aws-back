const AWS=require('aws-sdk');

const getClients=async(event)=>{
  const dynamoDB=new AWS.DynamoDB.DocumentClient();
  const result=await dynamoDB.scan({
    TableName:"ClientTable"
  }).promise();

  const clients=result.Items;

  return{
    status:200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
    body:clients
  }
}

module.exports={
  getClients
}