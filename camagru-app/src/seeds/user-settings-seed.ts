const generated = [];
for (let i = 0; i < 10; i += 1) {
  generated.push(`("${i + 1}", "${i % 2}")`);
}

const settingsData = generated.join(',');

export const sql = `
  INSERT INTO settings (user_id, notify_comments) VALUES ${settingsData};
`;
