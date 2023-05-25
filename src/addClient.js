const {v4}=require('uuid');
const AWS=require('aws-sdk')

const addClient=async(event)=>{
  const dynamoDB=new AWS.DynamoDB.DocumentClient();

  const{name,lastname,phone}=JSON.parse(event.body);
  const id=v4();

  const newClient={
    id,
    name,
    lastname,
    phone
  }

  await dynamoDB.put({
    TableName:"ClientTable",
    Item:newClient
  }).promise();

  return {
    status:200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
    body: newClient
  }
};

module.exports={
  addClient
}
