const mysql = require("mysql2/promise");

async function connectToDb() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  return connection;
}

exports.handler = async function (event, context) {
  console.log("identity validate");
  const connection = await connectToDb();
  const body = JSON.parse(event.body);
  const event = body.event;
  const user = body.user;
  console.log(user);
  return {
    statusCode: 200,
    body: JSON.stringify({ value: rows[0].value }),
  };
};
