import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // get access to the configService, and then to the configurations
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  const env = configService.get('environment');

  // shut down hook for pre shutdown clean up
  app.enableShutdownHooks();

  await app.listen(port);

  logger.debug(`Server up at ${port} as ${env}`);
}
bootstrap();
