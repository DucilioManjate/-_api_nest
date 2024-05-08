export interface JwtPayload {
    sub: string; // Identificador do usuário (sub)
    username: string; // Nome de usuário
    userType: 'house' | 'artist'; // Tipo de usuário: Casa de Eventos ou Artista
    userId: number; // ID do usuário na tabela correspondente
  }
  