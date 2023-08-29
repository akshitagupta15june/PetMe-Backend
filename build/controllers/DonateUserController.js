"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DonateUserController {
    constructor(donateUserService) {
        this.donateUserService = donateUserService;
    }
    async getDonateUserById(req, res) {
        const { id } = req.params;
        const response = await this.donateUserService.getDonateUserById(Number(id));
        return res.status(200).json(response);
    }
    async getDonateUserByEmail(req, res) {
        const { email } = req.body;
        const response = await this.donateUserService.getDonateUserByEmail(email);
        return res.status(200).json(response);
    }
    async createDonateUser(req, res) {
        const response = await this.donateUserService.createDonateUser(req.body);
        if (response.code === 400)
            return res.status(400).json({ message: response.message });
        return res.status(201).json({ message: response });
    }
}
exports.default = DonateUserController;
//# sourceMappingURL=DonateUserController.js.map