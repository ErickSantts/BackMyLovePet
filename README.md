# BackMyLovePet

Para funcionar crie um banco com os seguintes scripts


create database my_pet_lover_db;

create table pessoa(
	id serial primary key, 
	nome varchar(50),
  	email varchar(50),
  	contato varchar(15),
  	datanascimento date,
  	senha varchar(20),
  	perfil varchar(20),
  	data_insercao date default current_date,
  	data_remocao date
);

create table pet(
	id serial primary key,
  nome varchar(50),
  raca varchar(20),
  dono_id integer constraint fk_dono_id references pessoa,
  idade decimal
);

create table consulta(
	id serial primary key,
    pet_id integer 
         constraint fk_pet_id 
         references pet,
	dono_id integer
        constraint fk_dono_id
        references pessoa,
	data_consulta date default current_date,
	remedios varchar(500),
	valor decimal,
	detalhes varchar(1000)
);

insert into pessoa(nome, email, contato, senha, perfil, data_remocao) values
('Erick dos Santos Batista', 'dsantoserick@gmail.com', '(95) 99156-0814', '123', 'owner', null),
('Eliane dos Santos Batista', 'eliane@gmail.com', '(95) 99156-0812', '123', 'funcionario', null),
('Thaiza Duarte', 'thaiza_duarte@gmail.com', '(95) 99156-0815', '123', 'veterinario', null),
('Erica dos Santos Batista', 'erica_dsantos@gmail.com', '(95) 99156-0811', '123', 'cliente', null);

insert into pet (nome, raca, dono_id, idade) values
('Spyck','Labrador', 3, 3),
('Bruce', 'Husky Siberiano', 3, 2);

insert into consulta(dono_id, pet_id, remedios, valor, detalhes) values
(3, 1, 'Dipirona, Bravecto', 250, 'O animal chegou com pata com um hematoma, apenas medicação foi nescessária.'),
(3, 2, 'Vermeticida, Bravecto', 250, 'Animal apresentava muitos carrapatos e precisava de remedio para verme.');

alter table consulta add veterinario_id integer
constraint fk_vet_id
references pessoa;

update consulta set veterinario_id = 4 where id = 1 or id = 2;

insert into pessoa(nome, email, contato, senha, perfil, data_remocao) values
('Francisco', 'francisco@gmail.com', '(95) 99156-0814', '123', 'cliente', null);

insert into pet (nome, raca, dono_id, idade) values
('Lobão','PitBull', 5, 3);


select c.dono_id  from consulta c where c.id = 2;

insert into consulta(dono_id, pet_id, remedios, valor, detalhes) values
(5, 3, 'Esperando Resultados preeliminares dos exames.', 1550, 'O animal chegou com lesão grave nas patas da frente com risco de lesões internas no abdomen.');
