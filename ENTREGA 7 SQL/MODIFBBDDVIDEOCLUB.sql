CREATE database video_club;
use video_club;

-- Se crean las tablas socio, pelicula, alquila, copia, proveedor, actores_director

create table socio (
id_socio int auto_increment,
nombre varchar(255),
dni varchar (10),
tlf varchar (15),
email varchar(50),
pago boolean,
fecha_nacimiento date,
PRIMARY KEY (id_socio)
);
create table pelicula (
id_pelicula int auto_increment,
nombre varchar(255),
descripcion varchar (255),
caractula varchar(255),
pegi int,
PRIMARY KEY (id_pelicula)
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
tlf varchar(9),
dni varchar(15),
email varchar(255),
PRIMARY KEY (id_proveedor)
);
create table copia (
id_copia int auto_increment,
disponibilidad boolean,
formato enum('VHS', 'DVD'),
tipo_tarifa enum ('ESTRENOS', 'ESTANDAR', 'ANTIGUAS'),
id_pelicula int,
id_proveedor int,
constraint fk_copia_pelicula FOREIGN KEY (id_pelicula) references pelicula(id_pelicula),
constraint fk_copia_proveedor FOREIGN KEY (id_proveedor) references proveedor(id_proveedor),
PRIMARY KEY (id_copia)
);

create table pelicula_alquilada (
fecha_devolucion datetime,
fecha_adquirio datetime,
comentario text,
voto int,
id_socio int,
id_copia int,
constraint fk_pelicula_alquilada_socio FOREIGN KEY (id_socio) references socio(id_socio),
constraint fk_pelicula_alquilada_copia FOREIGN KEY (id_copia) references copia(id_copia)
);