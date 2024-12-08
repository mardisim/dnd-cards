import { Spell } from '@dnd-cards/server/db';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpellService {
  constructor(
    @InjectRepository(Spell)
    private readonly spellRepository: Repository<Spell>,
  ) {}

  async getAllSpells(): Promise<Spell[]> {
    return await this.spellRepository.find({
      relations: {
        school: true,
        dndClasses: true,
      },
    });
  }

  async getSpell(id: number): Promise<Spell | null> {
    return await this.spellRepository.findOne({
      where: { id },
      relations: {
        school: true,
        dndClasses: true,
      },
    });
  }

  async findRange(take = 10, skip = 0) {
    const [data, total] = await this.spellRepository.findAndCount({ take, skip });
    return { data, total };
  }
}
