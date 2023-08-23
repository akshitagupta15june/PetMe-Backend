import IStatusMap from '../StatusMap/StatusMap';
import { IDonateUser } from './DonateUser';

export default interface IDonateUserModel {
  getDonateUserById(id: number): Promise<IDonateUser | null>;
  getDonateUserByEmail(email: string): Promise<IDonateUser>;
  createDonateUser(donateUser: IDonateUser): Promise<IStatusMap>;
  updateDonateUser(donateUser: IDonateUser): Promise<IStatusMap>;
  deleteDonateUser(id: number): Promise<IStatusMap>;
}
