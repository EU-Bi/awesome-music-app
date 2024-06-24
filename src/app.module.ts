import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://eugeneadmin:ktPARYzxxHEL9w90@clusters.xllgj4j.mongodb.net/?retryWrites=true&w=majority&appName=Clusters'), TrackModule],
})
export class AppModule {}
