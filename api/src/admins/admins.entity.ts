import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
