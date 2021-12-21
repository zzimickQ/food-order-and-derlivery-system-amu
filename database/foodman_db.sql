-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2018 at 08:58 AM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodman_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `ballance_updates`
--

CREATE TABLE `ballance_updates` (
  `ballance_update_id` int(11) NOT NULL,
  `customer_id_rel` int(11) NOT NULL,
  `casher_id_rel` int(11) NOT NULL,
  `amount` float NOT NULL,
  `update_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `user_id_rel` int(11) NOT NULL,
  `ballance` float NOT NULL,
  `last_ballance_update_time` datetime NOT NULL,
  `special_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Stand-in structure for view `customers_detail`
-- (See below for the actual view)
--
CREATE TABLE `customers_detail` (
`customer_id` int(11)
,`user_id_rel` int(11)
,`ballance` float
,`last_ballance_update_time` datetime
,`special_id` varchar(255)
,`user_id` int(11)
,`username` varchar(255)
,`password` varchar(255)
,`account_type` varchar(255)
,`full_name` varchar(255)
,`sex` varchar(15)
,`dob` date
,`address` varchar(512)
,`registered_time` datetime
,`phone_number` varchar(255)
,`profile_pic` varchar(512)
);

-- --------------------------------------------------------

--
-- Table structure for table `meals`
--

CREATE TABLE `meals` (
  `meal_id` int(11) NOT NULL,
  `meal_name` varchar(255) NOT NULL,
  `av_for_breakfast` tinyint(1) NOT NULL,
  `av_for_lunch` tinyint(1) NOT NULL,
  `av_for_dinner` tinyint(1) NOT NULL,
  `price` float DEFAULT NULL,
  `meal_pic` varchar(512) NOT NULL,
  `reg_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `meal_name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `order_time` datetime NOT NULL,
  `deliver_time` datetime DEFAULT NULL,
  `processed_by_id` int(11) DEFAULT NULL,
  `delievered_by_id` int(11) DEFAULT NULL,
  `ordered_by_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Stand-in structure for view `order_detail`
-- (See below for the actual view)
--
CREATE TABLE `order_detail` (
`order_id` int(11)
,`meal_name` varchar(255)
,`price` float
,`order_time` datetime
,`deliver_time` datetime
,`processed_by_id` int(11)
,`delievered_by_id` int(11)
,`ordered_by_id` int(11)
,`customer_id` int(11)
,`user_id_rel` int(11)
,`ballance` float
,`last_ballance_update_time` datetime
,`special_id` varchar(255)
,`user_id` int(11)
,`username` varchar(255)
,`password` varchar(255)
,`account_type` varchar(255)
,`full_name` varchar(255)
,`sex` varchar(15)
,`dob` date
,`address` varchar(512)
,`registered_time` datetime
,`phone_number` varchar(255)
,`profile_pic` varchar(512)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `account_type` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `sex` varchar(15) NOT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `registered_time` datetime NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `profile_pic` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure for view `customers_detail`
--
DROP TABLE IF EXISTS `customers_detail`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `customers_detail`  AS  (select `customers`.`customer_id` AS `customer_id`,`customers`.`user_id_rel` AS `user_id_rel`,`customers`.`ballance` AS `ballance`,`customers`.`last_ballance_update_time` AS `last_ballance_update_time`,`customers`.`special_id` AS `special_id`,`users`.`user_id` AS `user_id`,`users`.`username` AS `username`,`users`.`password` AS `password`,`users`.`account_type` AS `account_type`,`users`.`full_name` AS `full_name`,`users`.`sex` AS `sex`,`users`.`dob` AS `dob`,`users`.`address` AS `address`,`users`.`registered_time` AS `registered_time`,`users`.`phone_number` AS `phone_number`,`users`.`profile_pic` AS `profile_pic` from (`customers` left join `users` on((`users`.`user_id` = `customers`.`user_id_rel`))) order by `customers`.`ballance`) ;

-- --------------------------------------------------------

--
-- Structure for view `order_detail`
--
DROP TABLE IF EXISTS `order_detail`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `order_detail`  AS  (select `orders`.`order_id` AS `order_id`,`orders`.`meal_name` AS `meal_name`,`orders`.`price` AS `price`,`orders`.`order_time` AS `order_time`,`orders`.`deliver_time` AS `deliver_time`,`orders`.`processed_by_id` AS `processed_by_id`,`orders`.`delievered_by_id` AS `delievered_by_id`,`orders`.`ordered_by_id` AS `ordered_by_id`,`customers_detail`.`customer_id` AS `customer_id`,`customers_detail`.`user_id_rel` AS `user_id_rel`,`customers_detail`.`ballance` AS `ballance`,`customers_detail`.`last_ballance_update_time` AS `last_ballance_update_time`,`customers_detail`.`special_id` AS `special_id`,`customers_detail`.`user_id` AS `user_id`,`customers_detail`.`username` AS `username`,`customers_detail`.`password` AS `password`,`customers_detail`.`account_type` AS `account_type`,`customers_detail`.`full_name` AS `full_name`,`customers_detail`.`sex` AS `sex`,`customers_detail`.`dob` AS `dob`,`customers_detail`.`address` AS `address`,`customers_detail`.`registered_time` AS `registered_time`,`customers_detail`.`phone_number` AS `phone_number`,`customers_detail`.`profile_pic` AS `profile_pic` from (`orders` left join `customers_detail` on((`customers_detail`.`customer_id` = `orders`.`ordered_by_id`)))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ballance_updates`
--
ALTER TABLE `ballance_updates`
  ADD PRIMARY KEY (`ballance_update_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`meal_id`),
  ADD UNIQUE KEY `meal_name` (`meal_name`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ballance_updates`
--
ALTER TABLE `ballance_updates`
  MODIFY `ballance_update_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `meal_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
