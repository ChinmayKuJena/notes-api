import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotesEntity } from 'src/_core/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class  NotesService extends TypeOrmCrudService<UserEntity> {
    constructor(@InjectRepository(NotesEntity) private _repo: Repository<NotesEntity>) {
        super(_repo);
    }
}

