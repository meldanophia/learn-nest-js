import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){

    }

    @Post()
    createMassage(){

    }

    @Get('/:id')
    getMessage(){

    }
}
