import express from 'express';
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/tradeController.js';

router.route('/').post(createJob).get(getAllJobs);
