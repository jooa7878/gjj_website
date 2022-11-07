import { CreateRequestDto } from './dto/create.request.dto';
import { Users } from './users.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
  ) {}

  async create(user: CreateRequestDto): Promise<Users> {
    return await this.usersModel.create(user);
  }

  async findAll() {
    const result = await this.usersModel.find();

    return result;
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
