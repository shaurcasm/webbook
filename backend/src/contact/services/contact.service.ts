import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ContactEntity } from '../models/contact.entity';
import { ContactI } from '../models/contact.interface';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>,
  ) {}

  create(contact: ContactI): Observable<ContactI> {
    return from(this.contactRepository.save(contact));
  }

  findAll(): Observable<ContactI[]> {
    return from(this.contactRepository.find());
  }
}
