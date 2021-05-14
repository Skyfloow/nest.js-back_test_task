"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersModule = void 0;
const common_1 = require("@nestjs/common");
const offers_service_1 = require("./offers.service");
const offers_controller_1 = require("./offers.controller");
const mongoose_1 = require("@nestjs/mongoose");
const offer_schema_1 = require("./schemas/offer.schema");
let OffersModule = class OffersModule {
};
OffersModule = __decorate([
    common_1.Module({
        providers: [offers_service_1.OffersService],
        controllers: [offers_controller_1.OffersController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: offer_schema_1.Offer.name, schema: offer_schema_1.OfferSchema }
            ])
        ]
    })
], OffersModule);
exports.OffersModule = OffersModule;
//# sourceMappingURL=offers.module.js.map