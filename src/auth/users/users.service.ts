import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { userId: 1, username: 'user1', password: 'password1' },
    { userId: 2, username: 'user2', password: 'password2' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.userId === id);
  }

  findOneByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }

  create(newUser: any) {
    const id = this.users.length + 1;
    const user = { userId: id, ...newUser };
    this.users.push(user);
    return user;
  }

  update(id: number, updatedUser: any) {
    const index = this.users.findIndex(user => user.userId === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.users.findIndex(user => user.userId === id);
    if (index !== -1) {
      const deletedUser = this.users.splice(index, 1);
      return deletedUser[0];
    }
    return null;
  }
}
