import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "./database.config";
import { SEQUELIZE, DEVELOPMENT, PRODUCTION, TEST  } from "./constant/constant";
import { User } from "src/module/users/user.entity";
import { FeedBack } from "src/module/feedback/feedback.entity";

export const databaseProviders = [{
provide : SEQUELIZE, 
useFactory : async () =>{
    let config : any;

    switch (process.env.NODE_ENV) {
        case DEVELOPMENT: {
            config = databaseConfig.development
            break;
        }
        case PRODUCTION :{
            config = databaseConfig.production
            break;
        }
        case TEST : {
            config= databaseConfig.test
            break;
        }
        default:
            config= databaseConfig.development
            break;
    }
    const sequelize = new Sequelize(config);
    sequelize.addModels([User, FeedBack]);
    await sequelize.sync();
    return sequelize;
}

}]