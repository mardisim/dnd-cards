import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { SpellService } from './spell.service';
import { AccessTokenGuard } from '@dnd-cards/server-shared';
import { ISpellModel } from '@interfaces';
import { ApiParam, ApiQuery } from '@nestjs/swagger';

type RangeQuery = {
  range: string;
  offset: string;
};

@Controller('/spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async getAllSpells(): Promise<ISpellModel[]> {
    return await this.spellService.getAllSpells();
  }

  @Get('/paged')
  @ApiQuery({ name: 'range', required: false })
  @ApiQuery({ name: 'offset', required: false })
  get(@Query() { range, offset }: RangeQuery) {
    return this.spellService.findRange(parseInt(range), parseInt(offset));
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
