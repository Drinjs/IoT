const mysql = require('mysql');
const dbConfig = require('./JdbcConfig');

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database
})

const curd = {
  query: (sql, values)=> {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if(err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if(err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

module.exports = curd;
