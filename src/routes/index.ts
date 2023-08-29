import { Router } from 'express';
import VolunteerRoutes from './VolunteerUserRoutes';

const router = Router();

router.use('/donate', VolunteerRoutes);

export default router;
