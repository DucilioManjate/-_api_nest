import { Injectable } from '@nestjs/common';

@Injectable()
export class ArtistsService {
  private readonly artists = [
    { id: 1, nome: 'Artista A', genero: 'Pop', contato: 'contato@c', biografia: 'Biografia A', videos: 'Video A', imagens: 'Imagem A' },
    { id: 2, nome: 'Artista B', genero: 'Rock', contato: 'contato@d', biografia: 'Biografia B', videos: 'Video B', imagens: 'Imagem B' },
  ];

  findAll() {
    return this.artists;
  }

  findOne(id: number) {
    return this.artists.find(artist => artist.id === id);
  }

  create(newArtist: any) {
    const id = this.artists.length + 1;
    const artist = { id, ...newArtist };
    this.artists.push(artist);
    return artist;
  }

  update(id: number, updatedArtist: any) {
    const index = this.artists.findIndex(artist => artist.id === id);
    if (index !== -1) {
      this.artists[index] = { ...this.artists[index], ...updatedArtist };
      return this.artists[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.artists.findIndex(artist => artist.id === id);
    if (index !== -1) {
      const deletedArtist = this.artists[index];
      this.artists.splice(index, 1);
      return deletedArtist;
    }
    return null;
  }
}
