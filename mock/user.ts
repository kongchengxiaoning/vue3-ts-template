import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: Random.cparagraph(2),
    avatar: Random.image('100x100', '#45b97c'),
    name: 'admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: Random.cparagraph(2),
    avatar: Random.image('100x100', '#4A7BF7'),
    name: 'editor'
  }
}

export default [
  {
    url: '/api/login',
    method: 'post',
    response: (config) => {
      const { username } = config.body
      const token = tokens[username]

      if (!token) {
        return {
          code: '60204',
          msg: '帐户或密码不正确'
        }
      }

      return {
        code: '0000',
        msg: 'success',
        data: token
      }
    }
  },
  {
    url: '/api/user_info',
    method: 'post',
    response: config => {
      const { token } = config.body
      const info = users[token]

      if (!info) {
        return {
          code: '50008',
          msg: '登录失败，无法获取用户详细信息。'
        }
      }

      return {
        code: '0000',
        msg: 'success',
        data: info
      }
    }
  },
  {
    url: '/api/logout',
    method: 'post',
    response: () => {
      return {
        code: '0000',
        msg: '成功',
        data: 'success'
      }
    }
  }
] as MockMethod[]
