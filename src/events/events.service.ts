import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  private events: any[] = [
    {
      id: 1,
      id_casa_de_eventos: 1,
      id_artista: 1,
      data: 'data_1',
      descricao: 'Desc_1',
      status: 'Agendado',
    },
    {
      id: 2,
      id_casa_de_eventos: 2,
      id_artista: 2,
      data: 'data_2',
      descricao: 'Desc_2',
      status: 'Confirmado',
    },
  ];

  // Listar todos os eventos
  findAll(): any[] {
    return this.events;
  }

  // Encontrar um evento por ID
  findOne(id: number): any {
    return this.events.find(event => event.id === id);
  }

  // Criar um novo evento
  create(event: any): any {
    const newEvent = { id: this.events.length + 1, ...event };
    this.events.push(newEvent);
    return newEvent;
  }

  // Atualizar os detalhes de um evento existente
  update(id: number, event: any): any {
    const index = this.events.findIndex(event => event.id === id);
    if (index !== -1) {
      this.events[index] = { ...this.events[index], ...event };
      return this.events[index];
    }
    return null;
  }

  // Excluir um evento
  delete(id: number): any {
    const index = this.events.findIndex(event => event.id === id);
    if (index !== -1) {
      const deletedEvent = this.events.splice(index, 1);
      return deletedEvent[0];
    }
    return null;
  }
}
