import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { GenerateModule } from './generate/generate.module';

const NODE_ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: NODE_ENV ? `.env.${NODE_ENV}` : '.env',
    }),
    ScheduleModule.forRoot(), // initialize the cron jobs
    GenerateModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
