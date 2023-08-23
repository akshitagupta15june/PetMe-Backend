import { Router } from 'express';
import DonateUserRouter from './DonateUserRoutes';

const router = Router();

router.use('/donate', DonateUserRouter);

export default router;
