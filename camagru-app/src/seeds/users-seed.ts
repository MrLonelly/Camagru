import faker from '@fakerjs/faker';

const generated = [];
for (let i = 0; i < 10; i += 1) {
  generated.push(`("${faker().email()}", "${faker().firstName()}", "${faker().lastName}")`);
}

const userData = generated.join(',');

export const sql = `
  INSERT INTO users (email, username, password) VALUES ${userData};
`;
