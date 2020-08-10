import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HistoryController } from "./history.controller";
import { HistoryService } from "./history.service.orm";
import { History } from "./entities/history.entity";

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  controllers: [HistoryController],
  components: [HistoryService],
})
export class UsersModule {}
