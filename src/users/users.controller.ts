import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud, CrudController } from '@dataui/crud';
import { UserEntity } from 'src/_core/entities/user.entity';
@Crud({
  model: {
    type: UserEntity,
  },
  params: {
    user_id: {
      field: 'user_id',
      primary: true,
      type: 'number',
    },
  },
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
  constructor(public service: UsersService) { }
}
