import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { feedbackProviders } from './feedback.provider';
import { FeedbackController } from './feedback.controller';

@Module({
  providers: [FeedbackService, ...feedbackProviders],
  controllers: [FeedbackController]
  
})
export class FeedbackModule {}
