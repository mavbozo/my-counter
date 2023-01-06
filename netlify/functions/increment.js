const mysql = require("mysql2/promise");

async function connectToDb() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  return connection;
}

exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext;
  console.log(identity);
  console.log(user);
  const connection = await connectToDb();
  console.log("Connected to PlanetScale!");

  const body = JSON.parse(event.body);
  var value = body.value;
  value = value + 1;
  // mysql2 update counter value here where id = 1
  await connection.execute("UPDATE counter SET value = ? where id=1", [value]);
  // await connection.query("UPDATE counter SET value = ? where id=1", [value]);

  return {
    statusCode: 200,
    body: JSON.stringify({ value: value }),
  };
};
