const { Client } = require('pg');
let client = new Client({ database: 'films' });

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);

  console.log(data);
  client.end();
};

logQuery('SELECT count(id) FROM films WHERE duration < 110 GROUP BY genre');

// SELECT duration FROM films WHERE 