const express = require("express");
const cors = require("cors");
const pg = require("pg");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/adduser", (req, res) => {
  const { id, age, name, gender, company, email, phone, address } =
    req.body[
      ("id",
      "age",
      "name",
      "gender",
      "company",
      "email",
      "password",
      "phone",
      "address")
    ];

  console.log(id, age, name, gender, company, email, phone, address);

  const client = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "pguser",
    port: 5432,
  });
  client.connect((err) => {
    if (err) {
      console.error("Error connecting to PostgreSQL db", err);
      res.status(500).send("Error ");
    } else {
      console.log("Connected to PostgreSQL");
      const query = `INSERT INTO users (id, age, name, gender, company, email, phone, address) VALUES (${id}, ${age}, ${name}, ${gender}, ${company}, ${email}, ${phone}, ${address})"`;
      client.query(query, (err, result) => {
        if (err) {
          console.error("Error inserting data into PostgreSQL ", err);
          result.status(500).send("Error inserting data ");
        } else {
          console.log("Data inserted into PostgreSQL database");
          res.send("Data inserted ");
        }

        // Disconnect from the database
        client.end();
      });
    }
  });
});

app.listen(5000, () => {
  console.log(`Server started on port: 5000`);
});
