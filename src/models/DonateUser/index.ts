/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines-per-function */
import { PrismaClient } from '@prisma/client';
import IStatusMap from '../../interfaces/StatusMap/StatusMap';
import { IVolunteerUser } from '../../interfaces/DonateUser/DonateUser';
import IVolunteerUserModel from '../../interfaces/DonateUser/DonateUserModel';

export default class VolunteerUserModel implements IVolunteerUserModel {
  private prisma = new PrismaClient();

  async getVolunteerUserById(id: number): Promise<IVolunteerUser | null> {
    const donateUser = await this.prisma.donate_User.findUnique({
      where: {
        id,
      },
    });
    if (!donateUser) return null;

    return donateUser;
  }

  async getVolunteerUserByEmail(email: string): Promise<IVolunteerUser> {
    const donateUser = await this.prisma.donate_User.findUnique({
      where: {
        email,
      },
    });
    if (!donateUser) throw new Error('DonateUser not found');

    return donateUser;
  }

  async createVolunteerUser(volunteerUser: IVolunteerUser): Promise<IStatusMap> {
    const isEmailAlreadyRegistered = await this.prisma.donate_User.findUnique({
      where: {
        email: volunteerUser.email,
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
        first_name: volunteerUser.firstName,
        last_name: volunteerUser.lastName,
        email: volunteerUser.email,
        address: volunteerUser.address,
        city: volunteerUser.city,
        state: volunteerUser.state,
        country: volunteerUser.country,
        zip_code: volunteerUser.zipCode,
        phone_number: volunteerUser.phoneNumber,
      },
    });

    return {
      status: 'success',
      message: 'Volunteer User created successfully',
      code: 201,
    };
  }

  async updateVolunteerUser(volunteerUser: IVolunteerUser): Promise<IStatusMap> {
    await this.prisma.donate_User.update({
      where: {
        id: volunteerUser.id,
      },
      data: {
        first_name: volunteerUser.firstName,
        last_name: volunteerUser.lastName,
        email: volunteerUser.email,
        address: volunteerUser.address,
        city: volunteerUser.city,
        state: volunteerUser.state,
        country: volunteerUser.country,
        zip_code: volunteerUser.zipCode,
        phone_number: volunteerUser.phoneNumber,
      },
    });

    return {
      status: 'success',
      message: 'volunteerUser updated successfully',
      code: 200,
    };
  }

  async deleteVolunteerUser(id: number): Promise<IStatusMap> {
    await this.prisma.donate_User.delete({
      where: {
        id,
      },
    });

    return {
      status: 'success',
      message: 'volunteerUser deleted successfully',
      code: 200,
    };
  }
}
