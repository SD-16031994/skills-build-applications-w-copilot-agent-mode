import { Router } from 'express';
import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models/index.js';

export const apiRouter = Router();

apiRouter.get('/users/', async (_request, response, next) => {
  try {
    response.json(await UserModel.find().sort({ points: -1 }));
  } catch (error) {
    next(error);
  }
});

apiRouter.post('/users/', async (request, response, next) => {
  try {
    response.status(201).json(await UserModel.create(request.body));
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/teams/', async (_request, response, next) => {
  try {
    response.json(await TeamModel.find().sort({ name: 1 }));
  } catch (error) {
    next(error);
  }
});

apiRouter.post('/teams/', async (request, response, next) => {
  try {
    response.status(201).json(await TeamModel.create(request.body));
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/activities/', async (_request, response, next) => {
  try {
    response.json(await ActivityModel.find().sort({ completedAt: -1 }));
  } catch (error) {
    next(error);
  }
});

apiRouter.post('/activities/', async (request, response, next) => {
  try {
    response.status(201).json(await ActivityModel.create(request.body));
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/leaderboard/', async (_request, response, next) => {
  try {
    response.json(await LeaderboardModel.find().sort({ rank: 1 }));
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/workouts/', async (_request, response, next) => {
  try {
    response.json(await WorkoutModel.find().sort({ title: 1 }));
  } catch (error) {
    next(error);
  }
});

apiRouter.post('/workouts/', async (request, response, next) => {
  try {
    response.status(201).json(await WorkoutModel.create(request.body));
  } catch (error) {
    next(error);
  }
});