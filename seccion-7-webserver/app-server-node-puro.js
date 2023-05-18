const http = require( 'http' );

const hostName = '127.0.0.1';
const port = 3500;

const server = http.createServer(( req, res ) => {
    //res.statusCode = 200;
    res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
    res.writeHead( 200, {'Content-Type': 'application/csv' });
    res.write( 'id', 'nombre' );
    res.write( '1', 'Bryan Ariel Sanchez Anariba' );
    res.write( '2', 'Maria Fernanda Sanchez Anariba' );
    res.end();
});

server.listen( port, hostName, () => {
    console.log(`Server started at http://${ hostName }:${ port }`)
});
