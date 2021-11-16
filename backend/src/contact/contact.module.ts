import { Module } from '@nestjs/common';
import { ContactService } from './services/contact.service';
import { ContactController } from './controllers/contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './models/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
