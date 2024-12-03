import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SpellService } from './spell.service';
import { AccessTokenGuard } from '@dnd-cards/server/shared';
import { ISpellModel } from '@dnd-cards/shared/interfaces';
import { ApiParam } from '@nestjs/swagger';

@Controller('/spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async getAllSpells(): Promise<ISpellModel[]> {
    return await this.spellService.getAllSpells();
  }

  @UseGuards(AccessTokenGuard)
  @Get('/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Spell id number',
    type: 'integer',
  })
  async getSpells(@Param() id: number): Promise<ISpellModel | null> {
    return await this.spellService.getSpell(id);
  }
}
