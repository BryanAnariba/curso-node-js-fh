-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2018 at 04:20 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_twitter`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hashtags_trends`
--

CREATE TABLE `tbl_hashtags_trends` (
  `codigo_hashtag` int(11) NOT NULL,
  `hashtag` varchar(500) DEFAULT NULL,
  `cantidad_tweets` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_hashtags_trends`
--

INSERT INTO `tbl_hashtags_trends` (`codigo_hashtag`, `hashtag`, `cantidad_tweets`) VALUES
(1, '#InfinityWar', 5000),
(2, '#FueraJOH', 4999),
(3, '#ViscaMotagua', 1254),
(4, '#HalaOlimpia', 500);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_likes`
--

CREATE TABLE `tbl_likes` (
  `codigo_usuario_dio_like` int(11) NOT NULL,
  `codigo_tweet_like` int(11) NOT NULL,
  `fecha_like` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_seguidores`
--

CREATE TABLE `tbl_seguidores` (
  `codigo_usuario` int(11) NOT NULL,
  `codigo_usuario_sigue` int(11) NOT NULL,
  `fecha_sigue` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_seguidores`
--

INSERT INTO `tbl_seguidores` (`codigo_usuario`, `codigo_usuario_sigue`, `fecha_sigue`) VALUES
(1, 2, NULL),
(1, 3, NULL),
(1, 4, NULL),
(4, 1, NULL),
(4, 3, NULL),
(3, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tweets`
--

CREATE TABLE `tbl_tweets` (
  `codigo_tweet` int(11) NOT NULL,
  `codigo_usuario` int(11) NOT NULL,
  `contenido` varchar(2000) DEFAULT NULL,
  `hashtags` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `cantidad_likes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tweets`
--

INSERT INTO `tbl_tweets` (`codigo_tweet`, `codigo_usuario`, `contenido`, `hashtags`, `fecha`, `cantidad_likes`) VALUES
(1, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-04', NULL),
(2, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-10', NULL),
(3, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-18', NULL),
(4, 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '#InfinityWar #FueraJOH', '2018-04-11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usuarios`
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
  `lugar` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`codigo_usuario`, `nombre`, `apellido`, `nickname`, `url_imagen_perfil`, `cantidad_tweets`, `followers`, `following`, `lugar`) VALUES
(1, 'Goku', 'Rodriguez', '@goku', 'img/profile-pics/goku.jpg', 10, 20, 12, 'Honduras'),
(2, 'Patricio', 'Perez', '@patricio', 'img/profile-pics/patricio.jpg', 5, 25, 12, 'Nicaragua'),
(3, 'Bulma', 'Dominguez', '@bulma', 'img/profile-pics/bulma.jpg', 5, 45, 12, 'Guatemala'),
(4, 'Dende', 'Lainez', '@dende', 'img/profile-pics/dende.jpg', 5, 54, 12, 'Costa Rica');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_hashtags_trends`
--
ALTER TABLE `tbl_hashtags_trends`
  ADD PRIMARY KEY (`codigo_hashtag`);

--
-- Indexes for table `tbl_likes`
--
ALTER TABLE `tbl_likes`
  ADD KEY `fk_tbl_likes_tbl_usuarios1_idx` (`codigo_usuario_dio_like`),
  ADD KEY `fk_tbl_likes_tbl_tweets1_idx` (`codigo_tweet_like`);

--
-- Indexes for table `tbl_seguidores`
--
ALTER TABLE `tbl_seguidores`
  ADD KEY `fk_tbl_seguidores_tbl_usuarios1_idx` (`codigo_usuario`),
  ADD KEY `fk_tbl_seguidores_tbl_usuarios2_idx` (`codigo_usuario_sigue`);

--
-- Indexes for table `tbl_tweets`
--
ALTER TABLE `tbl_tweets`
  ADD PRIMARY KEY (`codigo_tweet`),
  ADD KEY `fk_tbl_tweets_tbl_usuarios_idx` (`codigo_usuario`);

--
-- Indexes for table `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`codigo_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_hashtags_trends`
--
ALTER TABLE `tbl_hashtags_trends`
  MODIFY `codigo_hashtag` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_tweets`
--
ALTER TABLE `tbl_tweets`
  MODIFY `codigo_tweet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `codigo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_likes`
--
ALTER TABLE `tbl_likes`
  ADD CONSTRAINT `fk_tbl_likes_tbl_tweets1` FOREIGN KEY (`codigo_tweet_like`) REFERENCES `tbl_tweets` (`codigo_tweet`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_likes_tbl_usuarios1` FOREIGN KEY (`codigo_usuario_dio_like`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tbl_seguidores`
--
ALTER TABLE `tbl_seguidores`
  ADD CONSTRAINT `fk_tbl_seguidores_tbl_usuarios1` FOREIGN KEY (`codigo_usuario`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_seguidores_tbl_usuarios2` FOREIGN KEY (`codigo_usuario_sigue`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tbl_tweets`
--
ALTER TABLE `tbl_tweets`
  ADD CONSTRAINT `fk_tbl_tweets_tbl_usuarios` FOREIGN KEY (`codigo_usuario`) REFERENCES `tbl_usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
