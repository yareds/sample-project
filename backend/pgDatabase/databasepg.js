const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "pguser",
  port: 5432,
});

client.connect();
client.query("SELECT * FROM users", (err, result) => {
  if (!err) {
    console.log(result.rows);
  } else {
    console.log(err.message);
  }
  client.end();
});
