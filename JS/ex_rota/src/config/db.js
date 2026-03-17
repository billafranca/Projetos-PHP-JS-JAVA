import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.NOME_BANCO
});

const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuario (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        senha TEXT NOT NULL
      );
    `);

    console.log("Tabela criada com sucesso");
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  }
};

export default initDB;