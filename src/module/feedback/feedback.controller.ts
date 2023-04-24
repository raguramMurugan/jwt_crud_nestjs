import { Controller, Get, Post, Delete, Put, UseGuards, Body, Param, NotFoundException, Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FeedbackService } from './feedback.service';
import { FeedbackDto } from './feedback.dto';

@Controller('feedback')
export class FeedbackController {
    constructor(private feedbackService : FeedbackService) {}

    @Get('allFeedback')
    async findAllFeedback() {
        return await this.feedbackService.findAllFeedback();
    }

    @Get(':id')
    async findFeedbackWithId(@Param('id') id:number){
        const feedbackId = await this.feedbackService.findFeedbackwithUserById(id);
        if(!feedbackId)
        {
            throw new NotFoundException('Feedback Not Found')
        }
        else 
        {
            return feedbackId;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('addFeedback')
    async postFeedback(@Body() feedback : FeedbackDto, @Request() req) {
        return await this.feedbackService.createFeedback(feedback, req.user.id);
    }
}
