"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines-per-function */
const client_1 = require("@prisma/client");
class DonateUserModel {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getDonateUserById(id) {
        const donateUser = await this.prisma.donate_User.findUnique({
            where: {
                id,
            },
        });
        if (!donateUser)
            return null;
        return donateUser;
    }
    async getDonateUserByEmail(email) {
        const donateUser = await this.prisma.donate_User.findUnique({
            where: {
                email,
            },
        });
        if (!donateUser)
            throw new Error('DonateUser not found');
        return donateUser;
    }
    async createDonateUser(donateUser) {
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
    async updateDonateUser(donateUser) {
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
    async deleteDonateUser(id) {
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
exports.default = DonateUserModel;
//# sourceMappingURL=index.js.map