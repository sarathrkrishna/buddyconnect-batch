import { Injectable, Logger } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { DatabaseService } from 'src/database/database.service';
import CONSTANTS from '../shared/constants/constants';
import { createUUIDExtension } from 'src/shared/db-queries/general-queries';
import {
  createChatDataQuery,
  createChatMasterQuery,
  createClientMasterQuery,
  createMessageDataQuery,
} from './db-queries/create-queries';
@Injectable()
export class GenerateService {
  private readonly logger = new Logger(GenerateService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  @Timeout(CONSTANTS.TIME.ONE_SECOND)
  async generateTables() {
    this.logger.debug('Creating tables if not already existing');
    // Create UUID extensio
    await this.databaseService.rawQuery(createUUIDExtension, []);
    // create client_master
    await this.databaseService.rawQuery(createClientMasterQuery, []);
    this.logger.debug('client_master created');
    // create chat_data
    await this.databaseService.rawQuery(createChatDataQuery, []);
    this.logger.debug('chat_data created');
    // create chat_master
    await this.databaseService.rawQuery(createChatMasterQuery, []);
    this.logger.debug('chat_master created');
    // create message_data
    await this.databaseService.rawQuery(createMessageDataQuery, []);
    this.logger.debug('message_data created');
  }
}
