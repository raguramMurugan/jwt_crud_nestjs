import { FEEDBACK_REPOSITORY } from "src/database/constant/constant";
import { FeedBack } from "./feedback.entity";


export const feedbackProviders = [{
    provide : FEEDBACK_REPOSITORY,
    useValue : FeedBack
}]