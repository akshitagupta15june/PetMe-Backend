"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DonateUserRoutes_1 = require("./DonateUserRoutes");
const router = (0, express_1.Router)();
router.use('/donate', DonateUserRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map