import faker from '@fakerjs/faker';

const generated = [];
for (let i = 0; i < 10; i += 1) {
  generated.push(`("${i + 1}", "${i + 1}", "${((i * 2) / 3) * 4}", "${faker().domain()}")`);
}

const imageData = generated.join(',');

export const sql = `
  INSERT INTO images (user_id, comment_id, likes, path) VALUES ${imageData};
`;
