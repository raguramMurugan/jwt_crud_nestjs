import { Inject, Injectable } from '@nestjs/common';
import { FEEDBACK_REPOSITORY } from 'src/database/constant/constant';
import { FeedBack } from './feedback.entity';
import { FeedbackDto } from './feedback.dto';
import { User } from '../users/user.entity';

@Injectable()
export class FeedbackService {
    constructor(@Inject(FEEDBACK_REPOSITORY) private feedbackRepo : typeof FeedBack ) {}


    public async createFeedback(feedback : FeedbackDto, userId) {
        return await this.feedbackRepo.create({...feedback, userId});
    }

    public async findFeedbackwithUserById (id : number) : Promise<FeedBack>{
        return await this.feedbackRepo.findOne<FeedBack>({
            where : {id},
            include : [{model : User, attributes : {exclude : ['password']}}]
        });
    }

    public async findAllFeedback() : Promise<FeedBack[]> {
        return await this.feedbackRepo.findAll<FeedBack>({
           include : [{model : User, attributes : {exclude : ['password']}}]
        })
    }

    public async deleteFeedBackbyId(id : number, userId: number) {
        return await this.feedbackRepo.destroy({
            where : {id, userId}
        });
    }

    public async updatefeedBackwithUserById (id, data, userId) {
        const [rowsAffected, updatedUser] = await this.feedbackRepo.update({...data}, {where : {id, userId}, returning: true});
        return {rowsAffected, updatedUser}
    }

    
}
