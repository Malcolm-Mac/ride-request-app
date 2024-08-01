import { Injectable } from '@angular/core';
import { Mapper } from '../../../../base/utils/mapper';
import { UserModel } from '../../../../domain/models/user.model';
import { UserEntity } from '../entities/user.entity';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      fullName: param.name,
      username: param.userName,
      phoneNum: param.phoneNumber,
      profilePicture: param.userPicture,
      activationStatus: param.activationStatus,
    };
  }
  mapTo(param: UserEntity): UserModel {
    return {
      id: param.id,
      fullName: param.name,
      username: param.userName,
      phoneNum: param.phoneNumber,
      profilePicture: param.userPicture,
      activationStatus: param.activationStatus,
    };
  }
}
