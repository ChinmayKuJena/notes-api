import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ViewEntity,
} from 'typeorm';
import { DbProviders } from './db.providers';

@Entity(DbProviders.USERS)
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  created_at: string;
}
