module.exports = {
  '/': {
    controller: 'Gallery',
    method: ['get'],
    auth: false,
    admin: false,
    args: [],
  },
  '/static/:path': {
    controller: 'Static',
    auth: false,
    method: ['get'],
    admin: false,
    args: [
      {
        name: 'path',
        type: 'string',
      },
    ],
  },
  '/register': {
    controller: 'Register',
    method: ['post'],
    auth: false,
    admin: false,
    args: [], 
  },
  '/login': {
    controller: 'Login',
    method: ['post'],
    auth: false,
    admin: false,
    args: [],
  },
  '/users/:id': {
    controller: 'Users',
    method: ['patch', 'get', 'delete', 'post'],
    auth: true,
    admin: false,
    args: [
      {
        name: 'id',
        type: 'number',
      }
    ],
  }
}