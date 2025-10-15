const express = require('express');
const userRouter = express.Router();
const ApiUser = require('../api/user');

// Rotas do usuário comum
userRouter.get('/info', ApiUser.FindById.bind(ApiUser));
userRouter.put('/', ApiUser.Update.bind(ApiUser));
userRouter.delete('/', ApiUser.Delete.bind(ApiUser));

// Rotas do admin
userRouter.post('/', ApiUser.Create.bind(ApiUser));
userRouter.get('/', ApiUser.FindAll.bind(ApiUser));
userRouter.get('/:id', ApiUser.FindById.bind(ApiUser));
userRouter.put('/:id', ApiUser.Update.bind(ApiUser));
userRouter.delete('/:id', ApiUser.Delete.bind(ApiUser));

module.exports = userRouter;
