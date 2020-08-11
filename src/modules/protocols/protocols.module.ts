import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProtocolsController } from "./protocols.controller";
import { ProtocolsService } from "./protocols.service.orm";
import { Protocol } from "./entities/protocols.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Protocol])],
  controllers: [ProtocolsController],
  providers: [ProtocolsService],
})
export class ProtocolsModule {}
