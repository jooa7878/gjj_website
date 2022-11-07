import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Users extends Document {
  @ApiProperty({
    example: 'string',
    description: 'string',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '2022-01-01',
    description: 'string',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  dueDate: string;

  readonly readOnlyData: {
    id: string;
    name: string;
    dueDate: string;
  };
}

const _UsersSchema = SchemaFactory.createForClass(Users);

_UsersSchema.virtual('readOnlyData').get(function (this: Users) {
  return {
    id: this.id,
    name: this.name,
    dueDate: this.dueDate,
  };
});

_UsersSchema.set('toObject', { virtuals: true });
_UsersSchema.set('toJSON', { virtuals: true });

export const UsersSchema = _UsersSchema;
