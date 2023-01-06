const mysql = require("mysql2/promise");

async function connectToDb() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  return connection;
}

exports.handler = async function (event, context) {
  console.log("identity login");
  console.log(context);
  const connection = await connectToDb();
  const body = JSON.parse(event.body);
  const user = body.user;
  console.log("body");
  console.log(body);
  return {
    statusCode: 200,
    body: JSON.stringify({ value: "Ok" }),
  };
};
