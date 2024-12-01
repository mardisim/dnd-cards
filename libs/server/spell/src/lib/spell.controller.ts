import { Controller, Get } from "@nestjs/common";
import { SpellService } from "./spell.service";

@Controller('/spell')
export class SpellController {
    constructor(private readonly spellService: SpellService){}

    @Get()
    async getAllSpells() {
        return await this.spellService.getAllSpells();
    }
}