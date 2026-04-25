import { Controller, Get, Route, Tags } from 'tsoa';

@Route('/health')
@Tags('System')
export class HealthController extends Controller {
  /**
   * Verify that the API is responding.
   */
  @Get('/')
  public async getHealth(): Promise<{ status: string }> {
    return { status: 'ok' };
  }
}
