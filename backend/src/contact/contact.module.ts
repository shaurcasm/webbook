import { Module } from '@nestjs/common';
import { ContactService } from './services/contact.service';

@Module({
  providers: [ContactService],
})
export class ContactModule {}
