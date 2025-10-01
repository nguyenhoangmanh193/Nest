import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.DATABASE_URL, // link từ neon.tech
  autoLoadModels: true,
  synchronize: true, // chỉ nên dùng khi dev
}));
