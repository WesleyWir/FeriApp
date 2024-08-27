import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '@/admins/admins.entity';
import { Repository } from 'typeorm';
import { CreateAdminDTO } from '@/admins/dto/create-admin.dto';
import { validate } from 'class-validator';
import { UpdateAdminDTO } from './dto/update-admin.dto';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admin)
        private readonly repository: Repository<Admin>
    ) { }

    async create(data: CreateAdminDTO): Promise<Admin> {
        const { name, email, password } = data;
        const user = await this.repository.findOne({ where: { name, email } });

        if (user) {
            const errors = { username: "Email must be unique." };
            throw new HttpException(
                { message: "Input data validation failed", errors },
                HttpStatus.BAD_REQUEST,
            );
        }
        const newAdmin = new Admin();
        newAdmin.name = name;
        newAdmin.email = email;
        newAdmin.password = password;

        const errors = await validate(newAdmin);
        const hasErrors = (errors.length > 0);
        if (hasErrors) {
            const _errors = { username: "User input is not valid." };
            throw new HttpException(
                { message: "Input data validation failed", _errors },
                HttpStatus.BAD_REQUEST,
            );
        }
        const createdAdmin: Admin = await this.repository.save(newAdmin);
        return createdAdmin;
    }

    async update(id: number, dto: UpdateAdminDTO): Promise<Admin> {
        const toUpdate = await this.repository.findOneBy({ id });
        delete toUpdate.password;
        const updated = Object.assign(toUpdate, dto);
        return await this.repository.save(updated);
      }
}
