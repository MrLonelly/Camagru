const faker = require('faker');

const generated = [];
for (let i = 0; i < 10; i += 1) {
	generated.push(`("${i + 1}", "${faker.lorem.sentences()}")`);
}

const commentsData = generated.join(',');

module.exports.sql = `
  INSERT INTO comments (user_id, TEXT) VALUES ${commentsData};
`;
