const faker = require('faker');

const generated = [];
for (let i = 0; i < 10; i += 1) {
	generated.push(`("${faker.internet.email()}", "${faker.internet.userName()}", "${faker.internet.password()}")`);
}

const userData = generated.join(',');

module.exports.sql = `
  INSERT INTO users (email, username, password) VALUES ${userData};
`;
