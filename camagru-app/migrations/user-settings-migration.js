module.exports.sql = `
  CREATE TABLE settings (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
		notify_comments BOOLEAN DEFAULT true,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
		FOREIGN KEY (user_id) REFERENCES users(id)
  )
`;
