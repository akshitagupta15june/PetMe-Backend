import IVolunteerUserModel from '../interfaces/DonateUser/VolunteerUserModel';
import IStatusMap from '../interfaces/StatusMap/StatusMap';
import { IVolunteerUser } from '../interfaces/DonateUser/VolunteerUser';

export default class VolunteerUserService {
  constructor(
    private volunteersModel: IVolunteerUserModel,
  ) {}

  async getVolunteerUserById(id: number): Promise<IVolunteerUser | string> {
    const response = await this.volunteersModel.getVolunteerUserById(id);
    if (!response) throw new Error('VolunteerUser not found');

    return response;
  }

  async getVolunteerUserByEmail(email: string): Promise<IVolunteerUser | string> {
    const response = await this.volunteersModel.getVolunteerUserByEmail(email);
    if (!response) return 'VolunteerUser not found';

    return response;
  }

  async createVolunteerUser(VolunteerUser: IVolunteerUser): Promise<IStatusMap> {
    const response = await this.volunteersModel.createVolunteerUser(VolunteerUser);

    return response;
  }
}
