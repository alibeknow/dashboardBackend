import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { ChannelsModule } from './channels/channels.module'
import { ConfigModule } from './config/config.module'
import { HistoryModule } from './history/history.module'
import { ParamtersModule } from './parameters/parameters.module'
import { ProtocolsModule } from './protocols/protocols.module'
import { ProvidersModule } from './providers/providers.module'
import { RouteTypesModule } from './routeTypes/routeTypes.module'
import { RoutesModule } from './routes/routes.module'
import { AppAuthModule } from './auth/app.module'

@Module({
  imports: [
    UsersModule,
    ChannelsModule,
    ConfigModule,
    HistoryModule,
    ParamtersModule,
    ProtocolsModule,
    ProvidersModule,
    RouteTypesModule,
    RoutesModule,
    AppAuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '10.15.133.111',
      port: 5432,
      username: 'umg_user',
      password: 'plV8weeWdR',
      database: 'umg_database',
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
  ],
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
