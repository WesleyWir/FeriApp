import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = process.env.PORT;
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
    }),
  );
  app.enableCors({
    origin: [
      '*',
    ],
    credentials: true,
  });
  await app.listen(port);
}
bootstrap();
