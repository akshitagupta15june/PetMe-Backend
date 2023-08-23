import { Router } from 'express';
import DonateUserController from '../controllers/DonateUserController';
import DonateUserService from '../services/DonateUserService';
import DonateUserModel from '../models/DonateUser';

const donateUserModel = new DonateUserModel();
const donateUserService = new DonateUserService(donateUserModel);
const donateUserController = new DonateUserController(donateUserService);

const router = Router();

router.get('/', (req, res) => {
  donateUserController.getDonateUserById(req, res);
});

router.post('/', (req, res) => {
  console.log(req.body);

  donateUserController.createDonateUser(req, res);
});

export default router;
