import curd from '../common/DBConnect'

class UserDao {
  static delete(name) {
    const sql = `delete from user where name=${name};`
    return curd.query(sql)
  }

  static add(obj) {
    const sql = "insert into user set name=?, password=?, createBy=?, createTime=?, login=?, avatar=?, updateBy=?, updateTime=?;"
    return curd.query(sql, obj)
  }

  static update(obj) {
    const sql = `update user set name=?, password=?, login=?, avatar=?, updateBy=?, updateTime=?;`
    return curd.query(sql, obj)
  }

  static query(obj) {
    const sql = `select * from user where`
    const { name, password, login } = obj;
    const values = [];
    name && (sql += 'name=?' && values.push(name))
    password && (sql += 'password=?' && values.push(password))
    login && (sql += 'login=?' && values.push(login))
    return curd.query(sql, values)
  }
}

export default UserDao
