import { Injectable } from '@nestjs/common';

@Injectable()
export class HousesService {
  private readonly houses = [
    { id: 1, nome: 'Casa A', localizacao: 'Cidade X', contato: 'contato@a', descricao: 'Descrição A' },
    { id: 2, nome: 'Casa B', localizacao: 'Cidade Y', contato: 'contato@b', descricao: 'Descrição B' },
  ];

  findAll() {
    return this.houses;
  }

  findOne(id: number) {
    return this.houses.find(house => house.id === id);
  }

  create(newHouse: any) {
    const id = this.houses.length + 1;
    const house = { id, ...newHouse };
    this.houses.push(house);
    return house;
  }

  update(id: number, updatedHouse: any) {
    const index = this.houses.findIndex(house => house.id === id);
    if (index !== -1) {
      this.houses[index] = { ...this.houses[index], ...updatedHouse };
      return this.houses[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.houses.findIndex(house => house.id === id);
    if (index !== -1) {
      const deletedHouse = this.houses[index];
      this.houses.splice(index, 1);
      return deletedHouse;
    }
    return null;
  }
}
