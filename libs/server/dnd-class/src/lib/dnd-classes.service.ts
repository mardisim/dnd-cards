import { DndClasses } from '@dnd-cards/server-db';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DnDClassesService {
  constructor(
    @InjectRepository(DndClasses)
    private readonly dndClassRepository: Repository<DndClasses>,
  ) {}

  async getAllDnDClasses(): Promise<DndClasses[]> {
    return await this.dndClassRepository.find();
  }

  async getDnDClass(id: string): Promise<DndClasses | null> {
    return await this.dndClassRepository.findOne({
      where: { id },
      relations: {
        spells: true,
      },
    });
  }

  async findRange(take = 10, skip = 0) {
    const [data, total] = await this.dndClassRepository.findAndCount({
      take,
      skip,
    });
    return { data, total };
  }
}
