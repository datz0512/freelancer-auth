import { Application } from 'express';
import { verifyGatewayRequest } from '@datz0512/freelancer-shared';
import { authRoutes } from '@auth/routes/auth';
import { healthRoutes } from '@auth/routes/health';

const BASE_PATH = '/api/v1/auth';

export function appRoutes(app: Application): void {
  app.use('', healthRoutes());

  app.use(BASE_PATH, verifyGatewayRequest, authRoutes());
}