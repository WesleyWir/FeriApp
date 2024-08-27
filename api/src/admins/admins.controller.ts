import { Body, Controller, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminsService } from '@/admins/admins.service';
import { StoreAdminRequest } from '@/admins/requests/store-admin.request';
import { AdminResource } from '@/admins/resources/admin.resource';
import { plainToInstance } from 'class-transformer';
import { Admin } from '@/admins/admins.decorator';
import { UpdateAdminRequest } from '@/admins/requests/update-admin.request';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminService: AdminsService) { }

  @UsePipes(new ValidationPipe())
  @Post()
  async store(@Body() adminData: StoreAdminRequest): Promise<AdminResource> {
    const user = await this.adminService.create(adminData);
    return plainToInstance(AdminResource, user);
  }

  @Put()
  async update(@Admin('id') userId: number, @Body('user') adminData: UpdateAdminRequest) {
    return await this.adminService.update(userId, adminData);
  }
}
