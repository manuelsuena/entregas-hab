CREATE database video_club;
use video_club;

-- Se crean las tablas socio, pelicula, alquila, copia, proveedor, actores_director

create table socio (
id_socio int auto_increment,
nombre varchar(255),
dni int (10),
tlf int (15),
email varchar(50),
pago boolean,
fecha_nacimiento datetime,
PRIMARY KEY (id_socio)
);

create table alquila (
fecha_devolucion datetime,
fecha_adquirio datetime,
comentario text,
voto int
);

create table pelicula (
id_pelicula int auto_increment,
nombre varchar(255),
descripcion varchar (255),
caractula varchar(255),
pegi int,
PRIMARY KEY (id_pelicula)
);

create table copia (
id_copia int auto_increment,
disponibilidad int,
formato enum('VHS', 'DVD'),
tipo_tarifa enum ('ESTRENOS', 'ESTANDAR', 'ANTIGUAS'),
cantidad int,
id_pelicula int,
constraint fk_copia_pelicula FOREIGN KEY (id_pelicula) references pelicula(id_pelicula),
PRIMARY KEY (id_copia)
);

create table actores_director (
id_actores_director int auto_increment,
nombre varchar(255),
cargo enum('actor', 'director'),
id_pelicula int,
constraint fk_actores_director_pelicula FOREIGN KEY (id_pelicula) references pelicula(id_pelicula),
PRIMARY KEY (id_actores_director)
);

create table proveedor (
id_proveedor int auto_increment,
nombre varchar(255),
tlf int(9),
dni int(15),
email varchar(255),
id_copia int,
constraint fk_proveedor_copia FOREIGN KEY (id_copia) references copia(id_copia),
PRIMARY KEY (id_proveedor)
);

-- Se inserto datos en cada una de las tablas

insert into socio (nombre,dni,email,tlf,pago,fecha_nacimiento)
values('Velez Zorita Q.','39240802','magna@loremeumetus.com','686723138','1','1980-12-31 11:59:59'),
 ('Fletcher  Palmer R.','53240102','tellus.Suspendisse.sed@facilisis.co.uk','492220235','0','1975-12-31 15:59:59'),
('Moss Moana N.','64240810','erat.nonummy.ultricies@ac.net','63134502','0','1985-12-31 23:59:59'),
('Green Melvin U.','4083902','quis.diam.Pellentesque@dictummagna.ca','901543193','1','1970-12-31 23:59:59'),
 ('James Quemby S.','29341802','vehicula@inlobortistellus.co.uk','5369300','1','1973-12-31 23:59:59');
 
 select * from socio;
 
 insert into pelicula (nombre,descripcion,caractula,pegi)
values('Tiempo de ejecución','La película gira en torno al regreso de Xander Cage a quien todos creían muerto', '8393n389203', '13'),
('Return of Xander','n tiempo en el que tanto la esperanza como la adversidad impulsan a la humanidad a mirar hacia las estrellas y más allá.', '2892j2k2j2', '18'),
('Ad astra', 'un misterioso fenómeno amenaza con destruir la vida en el planeta Tierra', '29k3m3i3nen3n3i3i3','18'),
('Sonic', ' el famoso erizo azul de SEGA vivirá su primera aventura en la pantalla grande. En esta adaptación cinematográfica basada en la conocida saga de videojuegos', '2993k3m3i4930', '10'),
('BAD BOYS', 'El Departamento de Policía de Miami y su equipo de élite AMMO intentan derribar a Armando Armas jefe de un cartel de la droga.', '9483J3N84J4N4','21');
 
  select * from pelicula;
  
 insert into copia (disponibilidad,formato,tipo_tarifa,cantidad,id_pelicula)
values ('10','VHS', 'ESTANDAR', '30', '2'),
('2','DVD','ESTRENOS','50','4'),
('30','DVD','ESTRENOS','100','5'),
('8','VHS', 'ESTRENOS', '20', '4'),
('5','VHS', 'ESTANDAR', '14', '1');
 
  select * from copia;
  
 insert into proveedor(nombre,dni,email,tlf,id_copia)
values ("Huffman Randall M.","239066","malesuada@aliquetlobortis.ca","1340943","3"),
 ("Finch Arthur Q.","345690","tincidunt.dui@blanditmattisCras.co.uk","1827539","1"),
 ("Padilla Merritt F.","1209090","sem.ut@in.edu","409436464","1"),
 ("Trujillo Eagan W.","9089076","feugiat@velitCras.edu","37441549","3"),
 ("Craig Jerry Y.","84973920","luctus.lobortis@pulvinar.com","75391274","1");
 
  select * from proveedor;
  
  insert into actores_director( nombre, cargo, id_pelicula)
values ('Joe Carnahan', 'actor','5'),
('Bilall Fallah', 'director', '3'),
('Adil El Arbi', 'director', '1'),
('André Nemec', 'actor','4'),
('Josh Appelbaum', 'actor','2');

  select * from actores_director;
  
  ALTER TABLE alquila ADD id_copia int;
   ALTER TABLE alquila ADD constraint fk_alquila_copia FOREIGN KEY (id_copia) references copia(id_copia);
   
   insert into alquila (fecha_adquirio, fecha_devolucion, comentario, voto,id_copia)
values ("1995-04-20 15:59:59", "1995-04-30 15:59:59", "excelente pelicula la recomiendo", "5","1"),
("1995-10-02 15:59:59", "1995-10-15 15:59:59", "no la recomiendo", "2","5"),
("1995-06-21 15:59:59", "1995-07-02 15:59:59", " la recomiendo", "4","3"),
("1995-08-21 15:59:59", "1995-08-28 15:59:59", " muy mala pelicula", "1","4"),
("1995-05-21 15:59:59", "1995-06-02 15:59:59", " regular", "3","2");

  select * from alquila;