import { Table, Column, Model, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript'
import { User } from '../users/user.entity'

@Table
export class FeedBack extends Model<FeedBack> {

    @Column({
        type : DataType.STRING
    })
    comment : string

    @Column({
        type: DataType.INTEGER
    })
    rating : number

    @ForeignKey(() => User)
    @Column({
        type : DataType.INTEGER
    })
    userId : number

    @BelongsTo(() => User)
    user : User
}