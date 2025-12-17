import { Spells } from '@dnd-cards/server-db';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpellService {
  constructor(
    @InjectRepository(Spells)
    private readonly spellRepository: Repository<Spells>,
  ) {}

  async getAllSpells(): Promise<Spells[]> {
    return await this.spellRepository.find({
      relations: {
        schools: true,
        dndClassesSpells: true,
      },
    });
  }

  async getSpell(id: string): Promise<Spells | null> {
    return await this.spellRepository.findOne({
      where: { id },
      relations: {
        schools: true,
        dndClassesSpells: true,
      },
    });
  }

  async findRange(take = 10, skip = 0) {
    const [data, total] = await this.spellRepository.findAndCount({ take, skip });
    return { data, total };
  }
}
