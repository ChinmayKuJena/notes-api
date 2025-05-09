

import { Controller } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Crud, CrudController } from '@dataui/crud';
import { NotesEntity } from 'src/_core/entities/notes.entity';
@Crud({
  model: {
    type: NotesEntity,
  },
  params: {
    user_id: {
      field: 'user_id',
      primary: true,
      type: 'number',
    },
  },
})
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
}
