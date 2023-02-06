import { User } from "./../models/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data;
  }

  @Query(() => User)
  async getUserById(@Arg("id") id: string) {
    const user = this.data.find((user) => user.id == id);
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("first_name") first_name: string,
    @Arg("last_name") last_name: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const user = {
      id: (Math.random() * 10).toFixed(0),
      first_name,
      last_name,
      email,
      password,
    };

    this.data.push(user);

    return user;
  }
}

export default UserResolver;
