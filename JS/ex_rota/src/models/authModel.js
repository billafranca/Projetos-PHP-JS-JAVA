import initDB from './db.js';


export const initDB = async () => {
    try {
      await pool.query(`
        INSERT INTO usuarios (nome, email)
        VALUES(?,?,?);
      `);
}  catch(err){
    console.error("Erro ao inserir :", err);
}};
  