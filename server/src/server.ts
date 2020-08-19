import express, { request, response } from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(routes);
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

//Rotas: o endereço completo da requisição
//Recurso: Qual entidade estamos acessando no sistema

//GET: buscar uma ou mais informaçõs do Back-End 
//POST: Criar uma nova informação no Back-End 
//PUT: atualizar uma informação existente no Back-End
//DELETE: remover uma informação do Back-End

//Rota é total 
//Eexmplo 
//POST -> http://localhost:3333/users - criar usuários
//GET -> http://localhost:3333/users - Listar usuários
//GET -> http://localhost:3333/users/5 - Listar um único usuário com ID 5

//Tipos de parâmetros 
//Request Param: parâmetros da própria rota que identificam um recurso
//Query Param: parâmetros que vem na própria rota, opcionais, para filtros 
//Request Body: corpo da requisição - parâmetros para criação e atualização de informações




/*
app.get('/users', (request, response) => {
    //console.log('Listagem de usuários');

    //response.send('Hello World');
    const search = String(request.query.search);

    const usuariosFiltrados = search ? users.filter(user => user.includes(search)) : users;

    return response.json(usuariosFiltrados);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];
    
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});
*/

app.listen(3333);

