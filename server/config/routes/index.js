const routes = {
  'GET /users' : 'UserController.getAll',
  'POST /user' : 'UserController.create',
  'PUT /user/:id' : 'UserController.update',
  'DESTROY /user/:id' : 'UserController.destroy',
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',

  'GET /events' : 'EventController.getAll',
  'POST /event' : 'EventController.create',
  'PUT /event/:id' : 'EventController.update',
  'DESTROY /event/:id' : 'EventController.destroy',
};

export default routes;