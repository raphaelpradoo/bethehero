const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    // Capturando o ID da Ong passado pelo cabecalho da requisicao
    const ong_id = request.headers.authorization;
    
    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  }
}