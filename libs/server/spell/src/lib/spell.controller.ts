import { Spell } from '@dnd-cards/server-db';
import { AccessTokenGuard } from '@dnd-cards/server-shared';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { SpellService } from './spell.service';

type RangeQuery = {
  range: string;
  offset: string;
};

@Controller('/spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async getAllSpells(): Promise<Spell[]> {
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
  async getSpells(@Param() id: string): Promise<Spell | null> {
    return await this.spellService.getSpell(id);
  }
}
