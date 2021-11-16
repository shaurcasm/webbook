import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ContactI } from '../models/contact.interface';
import { ContactService } from '../services/contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  create(@Body() contact: ContactI): Observable<ContactI> {
    return this.contactService.create(contact);
  }

  @Get()
  findAll(): Observable<ContactI[]> {
    return this.contactService.findAll();
  }
}
