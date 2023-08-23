import { Request, Response } from 'express';
import DonateUserService from '../services/DonateUserService';

export default class DonateUserController {
  constructor(
    private donateUserService: DonateUserService,
  ) {}

  public async getDonateUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.donateUserService.getDonateUserById(Number(id));

    return res.status(200).json(response);
  }

  public async getDonateUserByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const response = await this.donateUserService.getDonateUserByEmail(email);

    return res.status(200).json(response);
  }

  public async createDonateUser(req: Request, res: Response): Promise<Response> {
    const response = await this.donateUserService.createDonateUser(req.body);

    if (response.code === 400) return res.status(400).json({ message: response.message });

    return res.status(201).json({ message: response });
  }
}
