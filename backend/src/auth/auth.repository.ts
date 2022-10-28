import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { Auth } from './auth.schema';
import { SignUpRequestDto } from './dto/signup.request.dto';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<Auth>,
  ) {}

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.authModel.exists({ email });
    return !!result;
  }

  async create(user: SignUpRequestDto): Promise<Auth> {
    return await this.authModel.create(user);
  }

  async findUserByEmail(email: string): Promise<Auth> {
    const auth = await this.authModel.findOne({ email });
    return auth;
  }

  // async existsByEmail(email: string): Promise<boolean> {
  //   const result = await this.catModel.exists({ email });
  //   return !!result;
  // }
  // async create(cat: CatRequestDto): Promise<Cat> {
  //   return await this.catModel.create(cat);
  // }
  // async findCatByEmail(email: string): Promise<Cat | null> {
  //   const cat = await this.catModel.findOne({ email });
  //   return cat;
  // }
  // async findCatByIdWithoutPassword(
  //   catId: string | Types.ObjectId,
  // ): Promise<Cat | null> {
  //   const cat = await this.catModel.findById(catId).select('-password');
  //   return cat;
  // }
  // async findByIdAndUpdateImg(id: string, fileName: string) {
  //   const cat = await this.catModel.findById(id);
  //   cat.imgUrl = `http://localhost:8000/media/${fileName}`;
  //   const newCat = await cat.save();
  //   return newCat.readOnlyData;
  // }
  // async findAll() {
  //   const CommentsModel = mongoose.model('comments', CommentsSchema);
  //   const result = await this.catModel
  //     .find()
  //     .populate('comments', CommentsModel);
  //   return result;
  // }
}
