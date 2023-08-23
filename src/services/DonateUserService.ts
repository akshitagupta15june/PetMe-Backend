import IStatusMap from '../interfaces/StatusMap/StatusMap';
import { IDonateUser } from '../interfaces/DonateUser/DonateUser';
import IDonateUserModel from '../interfaces/DonateUser/DonateUserModel';

export default class DonateUserService {
  constructor(
    private donateUserModel: IDonateUserModel,
  ) {}

  async getDonateUserById(id: number): Promise<IDonateUser | string> {
    const response = await this.donateUserModel.getDonateUserById(id);
    if (!response) throw new Error('DonateUser not found');

    return response;
  }

  async getDonateUserByEmail(email: string): Promise<IDonateUser | string> {
    const response = await this.donateUserModel.getDonateUserByEmail(email);
    if (!response) return 'DonateUser not found';

    return response;
  }

  async createDonateUser(donateUser: IDonateUser): Promise<IStatusMap> {
    const response = await this.donateUserModel.createDonateUser(donateUser);

    return response;
  }
}
