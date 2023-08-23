/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines-per-function */
import { PrismaClient } from '@prisma/client';
import IStatusMap from '../../interfaces/StatusMap/StatusMap';
import { IDonateUser } from '../../interfaces/DonateUser/DonateUser';
import IDonateUserModel from '../../interfaces/DonateUser/DonateUserModel';

export default class DonateUserModel implements IDonateUserModel {
  private prisma = new PrismaClient();

  async getDonateUserById(id: number): Promise<IDonateUser | null> {
    const donateUser = await this.prisma.donate_User.findUnique({
      where: {
        id,
      },
    });
    if (!donateUser) return null;

    return donateUser;
  }

  async getDonateUserByEmail(email: string): Promise<IDonateUser> {
    const donateUser = await this.prisma.donate_User.findUnique({
      where: {
        email,
      },
    });
    if (!donateUser) throw new Error('DonateUser not found');

    return donateUser;
  }

  async createDonateUser(donateUser: IDonateUser): Promise<IStatusMap> {
    const isEmailAlreadyRegistered = await this.prisma.donate_User.findUnique({
      where: {
        email: donateUser.email,
      },
    });

    if (isEmailAlreadyRegistered) {
      return {
        status: 'error',
        message: 'Email already registered',
        code: 400,
      };
    }

    await this.prisma.donate_User.create({
      data: {
        first_name: donateUser.firstName,
        last_name: donateUser.lastName,
        email: donateUser.email,
        address: donateUser.address,
        city: donateUser.city,
        state: donateUser.state,
        country: donateUser.country,
        zip_code: donateUser.zipCode,
        phone_number: donateUser.phoneNumber,
      },
    });

    return {
      status: 'success',
      message: 'DonateUser created successfully',
      code: 201,
    };
  }

  async updateDonateUser(donateUser: IDonateUser): Promise<IStatusMap> {
    await this.prisma.donate_User.update({
      where: {
        id: donateUser.id,
      },
      data: {
        first_name: donateUser.firstName,
        last_name: donateUser.lastName,
        email: donateUser.email,
        address: donateUser.address,
        city: donateUser.city,
        state: donateUser.state,
        country: donateUser.country,
        zip_code: donateUser.zipCode,
        phone_number: donateUser.phoneNumber,
      },
    });

    return {
      status: 'success',
      message: 'DonateUser updated successfully',
      code: 200,
    };
  }

  async deleteDonateUser(id: number): Promise<IStatusMap> {
    await this.prisma.donate_User.delete({
      where: {
        id,
      },
    });

    return {
      status: 'success',
      message: 'DonateUser deleted successfully',
      code: 200,
    };
  }
}
