import { Module } from '@nestjs/common';
import { PromotionsModule } from './promotions/promotions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

// API root module; first thing to be called
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    PromotionsModule,
    UsersModule,
    VotesModule
  ],
})
export class AppModule {}