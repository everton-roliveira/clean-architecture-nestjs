export interface UserProps {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserModel {
  private id?: number;
  private name!: string;
  private lastName!: string;
  private email!: string;
  private password!: string;
  private active!: boolean;
  private createdAt?: Date;
  private updatedAt?: Date;

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getLastName(): string {
    return this.lastName;
  }
  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
  isActive(): boolean {
    return this.active;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.lastName = props.lastName;
    this.email = props.email;
    this.password = props.password;
    this.active = props.active;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
