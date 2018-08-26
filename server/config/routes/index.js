const routes = {
  'GET /users' : 'UserController.getAll',
  'POST /user' : 'UserController.create',
  'PUT /user/:id' : 'UserController.update',
  'DESTROY /user/:id' : 'UserController.delete',
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',

  'GET /events' : 'EventController.getAll',
  'GET /event/:id': 'EventController.findById',
  'POST /event' : 'EventController.create',
  'PUT /event/:id' : 'EventController.update',
  'DELETE /event/:id' : 'EventController.delete',
};

export default routes;