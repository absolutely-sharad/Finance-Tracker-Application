import express from 'express';
import { 
  getForecastData,
  getForecastInsights
} from '../controllers/forecastController.js';

const router = express.Router();

router.get('/data', getForecastData);
router.get('/insights', getForecastInsights);

export default router;