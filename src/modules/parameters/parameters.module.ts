import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProviderController } from "./parameters.controller";
import { ProvidersService } from "./parameters.service.orm";
import { Parameters } from "./entities/parameters.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Parameters])],
  controllers: [ProviderController],
  providers: [ProvidersService],
})
export class ParamtersModule {}
