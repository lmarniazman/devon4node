import { BaseModelVM } from '../../../shared/base.model';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { EnumToArray } from '../../../shared/utilities/enum-to-array';
import { UserRole } from '../user-role.enum';

export class UserVm extends BaseModelVM {
  @ApiModelProperty()
  username: string;

  @ApiModelProperty()
  mail: string;

  @ApiModelProperty({
    enum: EnumToArray(UserRole),
    default: UserRole.Customer,
    example: UserRole.Customer,
  })
  role: string;
}