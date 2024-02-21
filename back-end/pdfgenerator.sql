-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 21 fév. 2024 à 05:54
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pdfgenerator`
--

-- --------------------------------------------------------

--
-- Structure de la table `data_devis`
--

CREATE TABLE `data_devis` (
  `id` int(100) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `companyName` varchar(100) DEFAULT NULL,
  `companySiren` varchar(100) DEFAULT NULL,
  `companyStreet` tinytext DEFAULT NULL,
  `companyZipcode` smallint(100) DEFAULT NULL,
  `companyCity` varchar(100) DEFAULT NULL,
  `companyCountry` varchar(100) DEFAULT NULL,
  `companyPhone` smallint(20) DEFAULT NULL,
  `companyMail` tinytext DEFAULT NULL,
  `companySite` tinytext DEFAULT NULL,
  `clientName` varchar(100) DEFAULT NULL,
  `clientZipcode` smallint(100) DEFAULT NULL,
  `clientCity` varchar(100) DEFAULT NULL,
  `clientPhone` smallint(100) DEFAULT NULL,
  `quotationDate` date DEFAULT NULL,
  `quotationReference` tinytext DEFAULT NULL,
  `quotationValidity` tinytext DEFAULT NULL,
  `quotationSender` varchar(100) DEFAULT NULL,
  `quotationPerformanceDate` date DEFAULT NULL,
  `wantsToSign` tinyint(1) DEFAULT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `modalities`
--

CREATE TABLE `modalities` (
  `id` int(100) NOT NULL,
  `data_id` int(100) NOT NULL,
  `performanceTitle` smallint(100) NOT NULL,
  `performanceDescription` smallint(100) DEFAULT NULL,
  `quantity` int(100) NOT NULL,
  `unitPrice` float NOT NULL,
  `tva` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

-- INSERT INTO `users` (`id`, `username`, `password`, `token`) VALUES
-- (1, 'bonjour', '$2a$10$bIUe65bapNmO.qWfHySprOKeHZtjxXYoarRqmREeq2cM2j2Ozg7Ui', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `data_devis`
--
ALTER TABLE `data_devis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `modalities`
--
ALTER TABLE `modalities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `data_devis`
--
ALTER TABLE `data_devis`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `modalities`
--
ALTER TABLE `modalities`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
-- COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
