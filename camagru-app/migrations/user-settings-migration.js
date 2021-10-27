module.exports.sql = `
  CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
		notify_comments BOOLEAN DEFAULT VALUE true,
    PRIMARY KEY (id),
		FOREIGN KEY (user_id) REFERENCES users(id)
  )
`;
