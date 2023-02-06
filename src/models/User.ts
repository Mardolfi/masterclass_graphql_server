import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(_type => ID)
    id: string;

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}