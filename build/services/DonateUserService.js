"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DonateUserService {
    constructor(donateUserModel) {
        this.donateUserModel = donateUserModel;
    }
    async getDonateUserById(id) {
        const response = await this.donateUserModel.getDonateUserById(id);
        if (!response)
            throw new Error('DonateUser not found');
        return response;
    }
    async getDonateUserByEmail(email) {
        const response = await this.donateUserModel.getDonateUserByEmail(email);
        if (!response)
            return 'DonateUser not found';
        return response;
    }
    async createDonateUser(donateUser) {
        const response = await this.donateUserModel.createDonateUser(donateUser);
        return response;
    }
}
exports.default = DonateUserService;
//# sourceMappingURL=DonateUserService.js.map