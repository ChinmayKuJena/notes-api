import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ViewEntity,
} from 'typeorm';
import { DbProviders } from './db.providers';

@Entity(DbProviders.NOTES)
export class NotesEntity {
  @PrimaryGeneratedColumn()
  note_id: number;
  @Column()
  user_id: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  created_at: string;
  @Column()
  updated_at: string;
}
