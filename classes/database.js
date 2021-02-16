const sqlite3 = require('better-sqlite3');

class BotDatabase {
  constructor(path) {
    this.db = new sqlite3(path); //, { verbose: console.log }
  }

  getUserRatings(id) {
    return this.db.prepare("SELECT * FROM userRatings WHERE userID = ?").all(id);
  }
}

module.exports = {
  BotDatabase
};