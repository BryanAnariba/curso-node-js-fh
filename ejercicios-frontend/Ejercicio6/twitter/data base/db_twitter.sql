-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2018 a las 22:09:48
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_twitter`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_hashtags_trends`
--

CREATE TABLE `tbl_hashtags_trends` (
  `codigo_hashtag` int(11) NOT NULL,
  `hashtag` varchar(500) DEFAULT NULL,
  `cantidad_tweets` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_hashtags_trends`
--

INSERT INTO `tbl_hashtags_trends` (`codigo_hashtag`, `hashtag`, `cantidad_tweets`) VALUES
(1, '#InfinityWar', 5000),
(2, '#FueraJOH', 4999),
(3, '#ViscaMotagua', 1254),
(4, '#HalaOlimpia', 500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_seguidores`
--

CREATE TABLE `tbl_seguidores` (
  `codigo_usuario` int(11) NOT NULL,
  `codigo_usuario_sigue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_seguidores`
--

INSERT INTO `tbl_seguidores` (`codigo_usuario`, `codigo_usuario_sigue`) VALUES
(1, 2),
(1, 3),
(1, 4),
(4, 1),
(4, 3),
(3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tweets`
--

CREATE TABLE `tbl_tweets` (
  `codigo_tweet` int(11) NOT NULL,
  `codigo_usuario` int(11) NOT NULL,
  `contenido` varchar(2000) DEFAULT NULL,
  `hashtags` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_tweets`
--

INSERT INTO `tbl_tweets` (`codigo_tweet`, `codigo_usuario`, `contenido`, `hashtags`, `fecha`) VALUES
(1, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-04'),
(2, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-10'),
(3, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-18'),
(4, 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-11'),
(5, 2, 'Hola este es mi primer tweet', '#FueraJOH', '2018-04-28'),
(6, 2, 'Estoy haciendo el examen', '#sad', '2018-04-28'),
(7, 2, 'Estoy haciendo otro examen', '#muySad', '2018-04-28'),
(8, 2, 'jejejejeje', '#holamundo', '2018-04-28'),
(13, 2, 'Estoy triste por que me fue mal en el examen :(, que hago |**|', '#sad #mysad', '2018-04-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `codigo_usuario` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `apellido` varchar(200) DEFAULT NULL,
  `nickname` varchar(200) DEFAULT NULL,
  `url_imagen_perfil` varchar(500) DEFAULT NULL,
  `cantidad_tweets` int(11) DEFAULT NULL,
  `followers` int(11) DEFAULT NULL,
  `following` int(11) DEFAULT NULL,
  `contrasena` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`codigo_usuario`, `nombre`, `apellido`, `nickname`, `url_imagen_perfil`, `cantidad_tweets`, `followers`, `following`, `contrasena`) VALUES
(1, 'Goku', 'Rodriguez', '@goku', 'img/profile-pics/goku.jpg', 10, 20, 12, 'holamundo'),
(2, 'Patricio', 'Perez', '@patricio', 'img/profile-pics/patricio.jpg', 5, 25, 12, 'holamundo'),
(3, 'Bulma', 'Dominguez', '@bulma', 'img/profile-pics/bulma.jpg', 5, 45, 12, 'holamundo'),
(4, 'Dende', 'Lainez', '@dende', 'img/profile-pics/dende.jpg', 5, 54, 12, 'holamundo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_hashtags_trends`
--
ALTER TABLE `tbl_hashtags_trends`
  ADD PRIMARY KEY (`codigo_hashtag`);

--
-- Indices de la tabla `tbl_seguidores`
--
ALTER TABLE `tbl_seguidores`
  ADD KEY `fk_tbl_seguidores_tbl_usuarios1_idx` (`codigo_usuario`),
  ADD KEY `fk_tbl_seguidores_tbl_usuarios2_idx` (`codigo_usuario_sigue`);

--
-- Indices de la tabla `tbl_tweets`
--
ALTER TABLE `tbl_tweets`
  ADD PRIMARY KEY (`codigo_tweet`),
  ADD KEY `fk_tbl_tweets_tbl_usuarios_idx` (`codigo_usuario`);

--
-- Indices de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`codigo_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_hashtags_trends`
--
ALTER TABLE `tbl_hashtags_trends`
  MODIFY `codigo_hashtag` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tbl_tweets`
--
ALTER TABLE `tbl_tweets`
  MODIFY `codigo_tweet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `codigo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_seguidores`
--
ALTER TABLE `tbl_seguidores`
  ADD CONSTRAINT `fk_tbl_seguidores_tbl_usuarios1` FOREIGN KEY (`codigo_usuario`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_seguidores_tbl_usuarios2` FOREIGN KEY (`codigo_usuario_sigue`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_tweets`
--
ALTER TABLE `tbl_tweets`
  ADD CONSTRAINT `fk_tbl_tweets_tbl_usuarios` FOREIGN KEY (`codigo_usuario`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
