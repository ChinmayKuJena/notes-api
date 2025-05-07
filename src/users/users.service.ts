import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/_core/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<UserEntity> {
    constructor(@InjectRepository(UserEntity) private _repo: Repository<UserEntity>) {
        super(_repo);
    }
}
