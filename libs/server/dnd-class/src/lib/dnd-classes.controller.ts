import { DndClasses } from '@dnd-cards/server-db';
import { AccessTokenGuard } from '@dnd-cards/server-shared';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { DnDClassesService } from './dnd-classes.service';

type RangeQuery = {
  range: string;
  offset: string;
};

@Controller('/dnd-class')
export class DnDClassesController {
  constructor(private readonly dndClassesService: DnDClassesService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async getAllDnDClasses(): Promise<DndClasses[]> {
    return await this.dndClassesService.getAllDnDClasses();
  }

  @Get('paged')
  @ApiQuery({ name: 'range', required: false })
  @ApiQuery({ name: 'offset', required: false })
  get(@Query() { range, offset }: RangeQuery) {
    return this.dndClassesService.findRange(parseInt(range), parseInt(offset));
  }

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'DnD Classes id',
  })
  async getSpells(@Param('id') id: string): Promise<DndClasses | null> {
    return await this.dndClassesService.getDnDClass(id);
  }
}
