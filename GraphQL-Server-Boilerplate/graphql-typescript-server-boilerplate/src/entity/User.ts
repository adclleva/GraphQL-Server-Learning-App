import {
    Entity,
    Column,
    PrimaryColumn,
    BeforeInsert,
    BaseEntity
} from "typeorm";

import * as uuidv4 from "uuid/v4";
@Entity()
export class User extends BaseEntity{
    // 
    @PrimaryColumn("uuid") id: string;

    @Column("varchar", { length: 225 })
    email: string;

    @Column("text") password: string;

    // this special function/decorator from typeform that we can use
    // decorators essentially add behavior to other objects at runtime
    @BeforeInsert()
    addId() {
        this.id = uuidv4()
    }
}

// extending from baseentitiy so we can do something like User.create({}) ... etc.