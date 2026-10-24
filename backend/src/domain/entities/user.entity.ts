import { Entity } from '../shared/entity.js';
import { Utils } from "../../shared/utils/utils.js";

export type UserCreateDto = {
  email: string;
  password: string;
};

export class User extends Entity {
  constructor(
    id: string,
    private email: string,
    private password: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    super(id, createdAt, updatedAt);
    this.validate();
  }

  public static async create(email: string, password: string): Promise<User> {
    const id = crypto.randomUUID();
    const hashedPassword = Utils.encryptPassword(password)
    const createdAt = new Date();
    const updatedAt = new Date();
    return new User(id, email, await hashedPassword, createdAt, updatedAt);
  }

  protected validate(): void {
    if (!this.email || !this.password) {
      throw new Error('Email and password are required');
    }
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
