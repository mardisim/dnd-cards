import { DndClass } from '@dnd-cards/server-db';
import { AccessTokenGuard } from '@dnd-cards/server-shared';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { DnDClassService } from './dnd-class.service';

type RangeQuery = {
  range: string;
  offset: string;
};

@Controller('/dnd-class')
export class DnDClassController {
  constructor(private readonly dndClassService: DnDClassService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async getAllDnDClasses(): Promise<DndClass[]> {
    return await this.dndClassService.getAllDnDClasses();
  }

  @Get('paged')
  @ApiQuery({ name: 'range', required: false })
  @ApiQuery({ name: 'offset', required: false })
  get(@Query() { range, offset }: RangeQuery) {
    return this.dndClassService.findRange(parseInt(range), parseInt(offset));
  }

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'DnD Class id',
  })
  async getSpells(@Param('id') id: string): Promise<DndClass | null> {
    return await this.dndClassService.getDnDClass(id);
  }
}
