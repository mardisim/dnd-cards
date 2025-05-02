import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DndClass } from '@dnd-cards/server-db';
import { Repository } from 'typeorm';

@Injectable()
export class DnDClassService {
  constructor(
    @InjectRepository(DndClass)
    private readonly dndClassRepository: Repository<DndClass>,
  ) {}

  async getAllDnDClasses(): Promise<DndClass[]> {
    return await this.dndClassRepository.find();
  }

  async getDnDClass(id: number): Promise<DndClass | null> {
    return await this.dndClassRepository.findOne({
      where: { id },
      relations: {
        spells: true,
      },
    });
  }

  async findRange(take = 10, skip = 0) {
    const [data, total] = await this.dndClassRepository.findAndCount({ take, skip });
    return { data, total };
  }
}
