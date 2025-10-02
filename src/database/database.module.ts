import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
    
        const uri = configService.get<string>('database.uri');
        return {
          dialect: 'postgres',
          uri,
          autoLoadModels: true,
          synchronize: false,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false, 
            },
          },
        };
      },
    }),
  ],
})
export class DatabaseModule {}
