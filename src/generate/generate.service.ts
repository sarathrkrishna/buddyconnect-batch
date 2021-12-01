import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class GenerateService {
  private readonly logger = new Logger(GenerateService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('running at 45 seconds');
  }
}
