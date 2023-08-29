"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines-per-function */
const client_1 = require("@prisma/client");
class VolunteerUserModel {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getVolunteerUserById(id) {
        const donateUser = await this.prisma.Volunteer_User.findUnique({
            where: {
                id,
            },
        });
        if (!donateUser)
            return null;
        return donateUser;
    }
    async getVolunteerUserByEmail(email) {
        const donateUser = await this.prisma.Volunteer_User.findUnique({
            where: {
                email,
            },
        });
        if (!donateUser)
            throw new Error('DonateUser not found');
        return donateUser;
    }
    async createVolunteerUser(volunteerUser) {
        const isEmailAlreadyRegistered = await this.prisma.Volunteer_User.findUnique({
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
        await this.prisma.Volunteer_User.create({
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
    async updateVolunteerUser(volunteerUser) {
        await this.prisma.Volunteer_User.update({
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
    async deleteVolunteerUser(id) {
        await this.prisma.Volunteer_User.delete({
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
exports.default = VolunteerUserModel;
//# sourceMappingURL=index.js.map