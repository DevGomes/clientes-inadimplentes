const variables = {
	API: { 
		port: process.env.port || 3001
	},
	Database: {
		conection: process.env.conection || 'mongodb://localhost:27017/base-teste-totvs'
	},
	ModelsNames: {
		CLIENTE_INADIMPLENTES: 'ClientesInadimplentes',
	},
};

module.exports = variables;