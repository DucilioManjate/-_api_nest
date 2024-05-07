import { JwtStrategy } from './jwt.guard'; 

describe('JwtGuard', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined(); 
  });
});
