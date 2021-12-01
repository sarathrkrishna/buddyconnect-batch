import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { GenerateService } from './generate.service';

@Module({
  imports: [DatabaseModule],
  providers: [GenerateService],
})
export class GenerateModule {}
