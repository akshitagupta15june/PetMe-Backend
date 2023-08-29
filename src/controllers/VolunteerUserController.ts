import { Request, Response } from 'express';
import VolunteerUserService from '../services/VolunteersService';

export default class VolunteerUserController {
  constructor(
    private volunterUserService: VolunteerUserService,
  ) {}

  public async getVolunteerUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.volunterUserService.getVolunteerUserById(Number(id));

    return res.status(200).json(response);
  }

  public async getVolunteerUserByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const response = await this.volunterUserService.getVolunteerUserByEmail(email);

    return res.status(200).json(response);
  }

  public async createVolunteerUser(req: Request, res: Response): Promise<Response> {
    const response = await this.volunterUserService.createVolunteerUser(req.body);

    if (response.code === 400) return res.status(400).json({ message: response.message });

    return res.status(201).json({ message: response });
  }
}
