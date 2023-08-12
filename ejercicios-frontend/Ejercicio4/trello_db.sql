-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2018 at 03:11 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trello_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_listas`
--

CREATE TABLE `tbl_listas` (
  `codigo_lista` int(11) NOT NULL,
  `titulo_lista` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_listas`
--

INSERT INTO `tbl_listas` (`codigo_lista`, `titulo_lista`) VALUES
(1, 'Tareas Pendientes'),
(2, 'Tareas en Proceso'),
(3, '1'),
(4, '2'),
(6, 'Lista Ariel'),
(7, 'Lista Ariel 2'),
(8, 'ListaWillian'),
(9, 'Jelsyn'),
(10, 'Karen'),
(11, 'Lizzul'),
(12, 'Otra de Lizzul'),
(13, 'Lista Gabriel'),
(14, 'Lista Denis'),
(15, 'Lista Evelin'),
(16, 'Carlos'),
(17, 'Jonathan'),
(18, 'Lista Victor'),
(19, 'Sosa Aleman'),
(20, 'Lista Nicolle');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tarjetas`
--

CREATE TABLE `tbl_tarjetas` (
  `codigo_tarjeta` int(11) NOT NULL,
  `codigo_usuario` int(11) NOT NULL,
  `codigo_lista` int(11) NOT NULL,
  `contenido_tarjeta` varchar(3000) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tarjetas`
--

INSERT INTO `tbl_tarjetas` (`codigo_tarjeta`, `codigo_usuario`, `codigo_lista`, `contenido_tarjeta`, `fecha_creacion`) VALUES
(1, 1, 1, 'A', '2017-11-03'),
(2, 2, 1, 'B', '2017-11-03'),
(3, 3, 1, 'V', '2017-11-03'),
(4, 1, 1, 'D', '2017-11-03'),
(5, 2, 2, 'E', '2017-11-03'),
(6, 3, 2, 'F', '2017-11-03'),
(7, 1, 2, 'G', '2017-11-03'),
(8, 2, 2, 'h', '2017-11-03'),
(9, 3, 2, 'I', '2017-11-03'),
(10, 4, 2, 'J', '2017-11-03'),
(11, 5, 2, 'K', '2017-11-03'),
(12, 10, 1, '1', '2017-01-01'),
(13, 10, 2, '2', '2017-01-01'),
(14, 9, 3, 'aaa', '2017-01-01'),
(15, 6, 2, 'bbbb', '2017-01-02'),
(16, 6, 4, 'bbb', '2017-01-01'),
(17, 10, 1, 'Ariel 1', '2017-01-01'),
(18, 7, 7, 'Otra tarea Ariel', '2017-01-01'),
(19, 5, 1, 'Willian', '2017-01-01'),
(20, 5, 8, 'Wilian', '2017-01-01'),
(21, 4, 9, 'Tarea Jelsyn', '2017-01-01'),
(22, 8, 10, 'Tarea Karen', '2017-01-01'),
(23, 3, 10, 'Tarea Lizul en lista de Karen', '2017-01-01'),
(24, 6, 12, 'Otra tarea de Lizzul', '2017-01-01'),
(25, 2, 13, 'Tarea Gabriel', '2017-01-01'),
(26, 8, 15, 'Tarea Evelin', '2017-01-01'),
(27, 10, 16, 'Tarea Carlos', '2017-01-02'),
(28, 6, 16, 'Tarea Jonathan', '2017-01-01'),
(29, 5, 18, 'Tarea Victor', '2017-01-01'),
(30, 5, 15, 'Otra tarea Victor', '2017-01-01'),
(31, 8, 19, 'Tarea Sosa', '2017-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `codigo_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(500) DEFAULT NULL,
  `url_imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`codigo_usuario`, `nombre_usuario`, `url_imagen`) VALUES
(1, 'Goku', 'img/profile-pics/goku.jpg'),
(2, 'Vegeta', 'img/profile-pics/vegeta.jpg'),
(3, 'Trunks', 'img/profile-pics/trunks.jpg'),
(4, 'Goten', 'img/profile-pics/goten.png'),
(5, 'Pan', 'img/profile-pics/pan.png'),
(6, 'Dende', 'img/profile-pics/dende.jpg'),
(7, 'Krillin', 'img/profile-pics/krilin.jpg'),
(8, 'Bulma', 'img/profile-pics/bulma.jpg'),
(9, 'Kibito', 'img/profile-pics/kibito.jpg'),
(10, 'Videl', 'img/profile-pics/uub.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_listas`
--
ALTER TABLE `tbl_listas`
  ADD PRIMARY KEY (`codigo_lista`);

--
-- Indexes for table `tbl_tarjetas`
--
ALTER TABLE `tbl_tarjetas`
  ADD PRIMARY KEY (`codigo_tarjeta`),
  ADD KEY `fk_tbl_tarjetas_tbl_usuarios_idx` (`codigo_usuario`),
  ADD KEY `fk_tbl_tarjetas_tbl_listas1_idx` (`codigo_lista`);

--
-- Indexes for table `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`codigo_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_listas`
--
ALTER TABLE `tbl_listas`
  MODIFY `codigo_lista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `tbl_tarjetas`
--
ALTER TABLE `tbl_tarjetas`
  MODIFY `codigo_tarjeta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `codigo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_tarjetas`
--
ALTER TABLE `tbl_tarjetas`
  ADD CONSTRAINT `fk_tbl_tarjetas_tbl_listas1` FOREIGN KEY (`codigo_lista`) REFERENCES `tbl_listas` (`codigo_lista`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_tarjetas_tbl_usuarios` FOREIGN KEY (`codigo_usuario`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
