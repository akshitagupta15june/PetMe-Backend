import IStatusMap from '../StatusMap/StatusMap';
import { IVolunteerUser } from './DonateUser';

export default interface IVolunteerUserModel {
  getVolunteerUserById(id: number): Promise<IVolunteerUser | null>;
  getVolunteerUserByEmail(email: string): Promise<IVolunteerUser>;
  createVolunteerUser(volunteerUser: IVolunteerUser): Promise<IStatusMap>;
  updateVolunteerUser(volunteerUser: IVolunteerUser): Promise<IStatusMap>;
  deleteVolunteerUser(id: number): Promise<IStatusMap>;
}
