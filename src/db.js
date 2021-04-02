async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://uzvouirj:bKi2I6pcwUzCp3in0dIUaxkgfonX3guC@tuffi.db.elephantsql.com:5432/uzvouirj'
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

