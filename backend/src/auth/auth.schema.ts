import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Auth extends Document {
  @ApiProperty({
    example: 'example@email.com',
    description: 'email',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

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
    example: 'string',
    description: 'password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
  };
}

const _AuthSchema = SchemaFactory.createForClass(Auth);

_AuthSchema.virtual('readOnlyData').get(function (this: Auth) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
});

_AuthSchema.set('toObject', { virtuals: true });
_AuthSchema.set('toJSON', { virtuals: true });

export const AuthSchema = _AuthSchema;
