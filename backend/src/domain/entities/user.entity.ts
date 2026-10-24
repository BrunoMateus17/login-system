import { Entity } from '../shared/entity.js';

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

  public static create(email: string, password: string): User {
    const id = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();
    return new User(id, email, password, createdAt, updatedAt);
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
