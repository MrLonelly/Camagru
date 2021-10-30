module.exports.sql = `
  CREATE TABLE images (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
		comment_id INT NOT NULL,
		likes INT DEFAULT 0,
		path VARCHAR(255) NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		PRIMARY KEY (id),
		FOREIGN KEY (user_id) REFERENCES users(id),
		FOREIGN KEY (comment_id) REFERENCES comments(id)
  )
`;
