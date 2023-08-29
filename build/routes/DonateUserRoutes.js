"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DonateUserController_1 = require("../controllers/DonateUserController");
const DonateUserService_1 = require("../services/DonateUserService");
const DonateUser_1 = require("../models/DonateUser");
const donateUserModel = new DonateUser_1.default();
const donateUserService = new DonateUserService_1.default(donateUserModel);
const donateUserController = new DonateUserController_1.default(donateUserService);
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    donateUserController.getDonateUserById(req, res);
});
router.post('/', (req, res) => {
    console.log(req.body);
    donateUserController.createDonateUser(req, res);
});
exports.default = router;
//# sourceMappingURL=DonateUserRoutes.js.map