import { Controller, Delete, Get, Param, Patch, Post, Body, HttpCode } from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';

@Controller('/events')
export class EventsController {

    @Get()
    findAll(): { id: number, name: string }[] {
        return [
            { id: 1, name: 'Event 1' },
            { id: 2, name: 'Event 2' },
            { id: 3, name: 'Event 3' },
        ];
    }

    @Get(':id')
    findOne(@Param('id') id: string): { id: number, name: string } {
        return { id: 1, name: 'Event 1' };
    }

    @Post()
    create(@Body() input: CreateEventDto): CreateEventDto {
        return input;
    }

    @Patch(':id')
    update(@Param('id') id, @Body() input: UpdateEventDto): string {
        return `This action updates a #${id} event`;
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} event`;
    }


}