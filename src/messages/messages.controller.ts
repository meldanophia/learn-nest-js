import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor(){
        //THIS IS NOT RECOMMENDED
        //USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMassage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        return this.messagesService.findOne(id);
    }
}
