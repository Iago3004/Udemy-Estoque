const express = require('express');
const movementRouter = express.Router();

movementRouter.get('/:inventoryId', () => {})
movementRouter.get('/:inventoryId/id', () => {})
movementRouter.post('/inventoryId', () => {})
movementRouter.put('/:inventoryId/id', () => {})
movementRouter.delete('/:inventoryId/id', () => {})

module.exports = movementRouter;