-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-08-2019 a las 19:09:06
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wikienzacta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `birth_date` date NOT NULL,
  `gender` text NOT NULL,
  `pass` varchar(40) NOT NULL,
  `country` text NOT NULL,
  `status` int(11) NOT NULL,
  `ip_address` varchar(15) NOT NULL,
  `register_date` datetime NOT NULL,
  `id_nivel` int(11) NOT NULL,
  `last_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `first_name`, `last_name`, `email`, `birth_date`, `gender`, `pass`, `country`, `status`, `ip_address`, `register_date`, `id_nivel`, `last_date`) VALUES
(1, 'tes', 'test', 'urielm@enzacta.net', '2019-08-21', 'Male', '698d51a19d8a121ce581499d7b701668', 'MÃ©xico', 1, '::1', '2019-08-29 06:01:14', 1, '0000-00-00 00:00:00'),
(2, 'tes', 'test', 'albertom@enzacta.net', '2019-08-21', 'Male', '7ea54f5363155965a69aee3feb05c1de', 'MÃ©xico', 1, '::1', '2019-08-29 07:01:14', 1, '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
