const mysql = require("mysql2");

class Database {
  constructor({ host, port, user, password, database }) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.database = database;
  }

  // Connects to the database
  connect() {
    this.connection = mysql.createConnection({
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
      database: this.database,
    });

    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) {
          console.error("Error connecting to database:", err);
          reject(err);
        } else {
          resolve(this.connection);
        }
      });
    });
  }

  // Executes a query
  execute(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }

  executeWithPagination(sql, filters, limit, offset) {
    const parameters = [...filters, limit, offset]; 
    const paginated_sql = `${sql} LIMIT ? OFFSET ?`; 

    return new Promise((resolve, reject) => {
      this.connection.query(paginated_sql, parameters, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }

  // Rollback transaction
  rollback() {
    return new Promise((resolve, reject) => {
      this.connection.rollback((err) => {
        if (err) {
          console.error("Error rolling back transaction:", err);
          reject(err);
        } else {
          console.log("Transaction rolled back.");
          resolve();
        }
      });
    });
  }

  // Commit transaction
  commit() {
    return new Promise((resolve, reject) => {
      this.connection.commit((err) => {
        if (err) {
          console.error("Error committing transaction:", err);
          reject(err);
        } else {
          console.log("Transaction committed.");
          resolve();
        }
      });
    });
  }
}

module.exports = Database;
