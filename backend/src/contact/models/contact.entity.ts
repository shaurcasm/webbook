import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
