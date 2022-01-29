import UserDao from '../dao/user.dao'

class UserService {
  static async login(obj) {
    const res = await UserDao.query(obj)
    return new Promise((resolve, reject) => {
      if(res) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  }
}

export default UserService
