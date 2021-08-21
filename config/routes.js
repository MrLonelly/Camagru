module.exports = {
  '': {
    controller: 'Gallery',
    method: 'index',
    auth: false,
    admin: false,
    args: [],
  },
  'static/:path': {
    controller: 'Static',
    method: 'index',
    auth: false,
    admin: false,
    args: [
      {
        name: 'path',
        type: 'string',
      },
    ],
  },
  'users/register': {
    controller: 'Users',
    method: 'register',
    auth: false,
    admin: false,
    args: [], 
  },
  'users/login': {
    controller: 'Users',
    method: 'register',
    auth: false,
    admin: false,
    args: [],
  },
  'users/:id': {
    controller: 'Users',
    method: 'getUser',
    auth: false,
    admin: false,
    args: [
      {
        name: 'id',
        type: 'number',
      },
    ],
  },
  'users/settings': {
    controller: 'Users',
    method: 'getSettings',
    auth: true,
    admin: false,
    args: [],
  }
}