import express from 'express';
import { createForm, getFormById, getUserForms, } from '../controllers/healthStatus.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const healthRoute = express.Router();


healthRoute.post('/health-status', protectRoute, createForm);
healthRoute.get('/health-status', protectRoute, getUserForms);
healthRoute.get('/health-status/:id', protectRoute, getFormById);

export default healthRoute;
