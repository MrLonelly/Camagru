import faker from '@fakerjs/faker';

const generated = [];
for (let i = 0; i < 10; i += 1) {
  generated.push(`("${i + 1}", "${faker().string()}")`);
}

const commentsData = generated.join(',');

export const sql = `
  INSERT INTO comments (user_id, TEXT) VALUES ${commentsData};
`;
