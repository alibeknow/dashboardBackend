import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProviderController } from "./providers.controller";
import { ProvidersService } from "./providers.service.orm";
import { Providers } from "./entities/providers.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Providers])],
  controllers: [ProviderController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
