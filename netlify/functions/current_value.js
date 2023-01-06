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

  // get value from counter table where id = 1
  const [rows, fields] = await connection.query(
    "SELECT value FROM counter where id=1"
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ value: rows[0].value }),
  };
};
