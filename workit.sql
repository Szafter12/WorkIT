-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 29, 2024 at 12:19 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workit`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `abilities`
--

CREATE TABLE `abilities` (
  `ability_id` int(11) NOT NULL,
  `ability_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `abilities`
--

INSERT INTO `abilities` (`ability_id`, `ability_name`) VALUES
(27, 'Assembly Language'),
(31, 'AWS'),
(32, 'Azure'),
(6, 'C#'),
(5, 'C++'),
(12, 'CSS'),
(20, 'Dart'),
(29, 'Docker'),
(30, 'Git'),
(15, 'Go'),
(33, 'Google Cloud'),
(25, 'Haskell'),
(11, 'HTML'),
(4, 'Java'),
(1, 'JavaScript'),
(9, 'Kotlin'),
(24, 'Lua'),
(18, 'MATLAB'),
(14, 'NoSQL'),
(22, 'Objective-C'),
(23, 'Perl'),
(2, 'PHP'),
(28, 'PowerShell'),
(3, 'Python'),
(17, 'R'),
(7, 'Ruby'),
(16, 'Rust'),
(21, 'Scala'),
(19, 'Shell Scripting'),
(13, 'SQL'),
(8, 'Swift'),
(10, 'TypeScript'),
(26, 'VHDL');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city` varchar(30) NOT NULL,
  `postal_code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city`, `postal_code`) VALUES
(1, 'Warszawa', '00-001'),
(2, 'Kraków', '30-001'),
(3, 'Łódź', '90-001'),
(4, 'Wrocław', '50-001'),
(5, 'Poznań', '60-001'),
(6, 'Gdańsk', '80-001'),
(7, 'Szczecin', '70-001'),
(8, 'Bydgoszcz', '85-001'),
(9, 'Lublin', '20-001'),
(10, 'Katowice', '40-001'),
(11, 'Gdynia', '81-001'),
(12, 'Czestochowa', '42-200'),
(13, 'Radom', '26-600'),
(14, 'Toruń', '87-100'),
(15, 'Zielona Góra', '65-001'),
(16, 'Opole', '45-001'),
(17, 'Rzeszów', '35-001'),
(18, 'Białystok', '15-001'),
(19, 'Gorzów Wielkopolski', '66-400'),
(20, 'Dąbrowa Górnicza', '41-300'),
(21, 'Sosnowiec', '41-200');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `companies`
--

CREATE TABLE `companies` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_logo_url` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `company_info` text NOT NULL,
  `addition_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`company_id`, `company_name`, `company_logo_url`, `phone`, `email`, `company_info`, `addition_date`) VALUES
(4, 'test', 'test', '12421421', 'essa@mail.com', 'test', '2024-11-28 23:43:56');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `company_address`
--

CREATE TABLE `company_address` (
  `company_address_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `street` varchar(100) NOT NULL,
  `city_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `contract_type`
--

CREATE TABLE `contract_type` (
  `contract_type_id` int(11) NOT NULL,
  `contract_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `contract_type`
--

INSERT INTO `contract_type` (`contract_type_id`, `contract_name`) VALUES
(1, 'B2B'),
(5, 'Kontrakt B2B'),
(3, 'Umowa o dzieło'),
(2, 'Umowa o pracę'),
(6, 'Umowa o staż'),
(4, 'Umowa zlecenie');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `job_level`
--

CREATE TABLE `job_level` (
  `level_id` int(11) NOT NULL,
  `level` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `job_level`
--

INSERT INTO `job_level` (`level_id`, `level`) VALUES
(10, 'Ekspert'),
(1, 'Junior'),
(8, 'Mid'),
(7, 'Praktykant'),
(9, 'Senior');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `job_requirements`
--

CREATE TABLE `job_requirements` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `requirement` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `job_responibilities`
--

CREATE TABLE `job_responibilities` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `responsibilities` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `languages`
--

CREATE TABLE `languages` (
  `language_id` int(11) NOT NULL,
  `language` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`language_id`, `language`) VALUES
(2, 'Polish');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL,
  `contract_type_id` int(11) NOT NULL,
  `job_description` text NOT NULL,
  `end_date` date NOT NULL,
  `work_mode_id` int(11) NOT NULL,
  `addition_date` datetime NOT NULL DEFAULT current_timestamp(),
  `work_dimension_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `company_id`, `job_title`, `level_id`, `contract_type_id`, `job_description`, `end_date`, `work_mode_id`, `addition_date`, `work_dimension_id`) VALUES
(5, 4, 'Front-end developer kraków', 1, 5, 'test', '2024-11-30', 4, '2024-11-28 23:44:26', 5);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `post_ability`
--

CREATE TABLE `post_ability` (
  `post_id` int(11) NOT NULL,
  `ability_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `post_ability`
--

INSERT INTO `post_ability` (`post_id`, `ability_id`) VALUES
(5, 11),
(5, 2),
(5, 1),
(5, 10);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `post_specialization`
--

CREATE TABLE `post_specialization` (
  `post_id` int(11) NOT NULL,
  `specialization_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `post_specialization`
--

INSERT INTO `post_specialization` (`post_id`, `specialization_id`) VALUES
(5, 4),
(5, 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `specializations`
--

CREATE TABLE `specializations` (
  `specialization_id` int(11) NOT NULL,
  `specialization` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `specializations`
--

INSERT INTO `specializations` (`specialization_id`, `specialization`) VALUES
(22, 'Artificial Intelligence Specialist'),
(4, 'Back-end'),
(23, 'Blockchain Developer'),
(20, 'Business Intelligence Analyst'),
(12, 'Cloud Engineer'),
(24, 'Cybersecurity Analyst'),
(21, 'Data Analyst'),
(9, 'Data Scientist'),
(8, 'Database Administrator'),
(6, 'DevOps'),
(15, 'Embedded Systems Engineer'),
(3, 'Front-end'),
(5, 'Full-stack'),
(16, 'Game Developer'),
(29, 'IT Consultant'),
(28, 'IT Project Manager'),
(19, 'IT Support Specialist'),
(10, 'Machine Learning Engineer'),
(14, 'Mobile App Developer'),
(18, 'Network Administrator'),
(27, 'Network Engineer'),
(25, 'Quality Assurance Engineer'),
(13, 'Security Specialist'),
(11, 'Software Engineer'),
(17, 'Systems Analyst'),
(7, 'UI/UX Design'),
(26, 'Web Developer');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `surname` varchar(15) NOT NULL,
  `date_of_birth` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `prof_picture_path` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `background_picture_path` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `addition_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_abilities`
--

CREATE TABLE `user_abilities` (
  `user_id` int(11) NOT NULL,
  `ability_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_address`
--

CREATE TABLE `user_address` (
  `user_address_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `street` varchar(100) NOT NULL,
  `city_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_education`
--

CREATE TABLE `user_education` (
  `education_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `field_name` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_language`
--

CREATE TABLE `user_language` (
  `language_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `level` set('A1','A2','B1','B2','C1','C2') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_social_links`
--

CREATE TABLE `user_social_links` (
  `social_link_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `platform_name` varchar(100) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_work`
--

CREATE TABLE `user_work` (
  `user_work_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comapny_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `work_dimension`
--

CREATE TABLE `work_dimension` (
  `work_dimension_id` int(11) NOT NULL,
  `work_dimension_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `work_dimension`
--

INSERT INTO `work_dimension` (`work_dimension_id`, `work_dimension_name`) VALUES
(5, 'Część etatu'),
(1, 'Pełny etat'),
(6, 'Tymczasowa');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `work_mode`
--

CREATE TABLE `work_mode` (
  `work_mode_id` int(11) NOT NULL,
  `work_mode_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `work_mode`
--

INSERT INTO `work_mode` (`work_mode_id`, `work_mode_name`) VALUES
(3, 'Praca hybrydowa'),
(2, 'Praca stacjonarna'),
(4, 'Praca zdalna');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `abilities`
--
ALTER TABLE `abilities`
  ADD PRIMARY KEY (`ability_id`),
  ADD UNIQUE KEY `ability_name` (`ability_name`);

--
-- Indeksy dla tabeli `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD UNIQUE KEY `city` (`city`),
  ADD UNIQUE KEY `postal_code` (`postal_code`);

--
-- Indeksy dla tabeli `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`),
  ADD UNIQUE KEY `company_name` (`company_name`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indeksy dla tabeli `company_address`
--
ALTER TABLE `company_address`
  ADD PRIMARY KEY (`company_address_id`),
  ADD KEY `city_id` (`city_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indeksy dla tabeli `contract_type`
--
ALTER TABLE `contract_type`
  ADD PRIMARY KEY (`contract_type_id`),
  ADD UNIQUE KEY `contract_name` (`contract_name`);

--
-- Indeksy dla tabeli `job_level`
--
ALTER TABLE `job_level`
  ADD PRIMARY KEY (`level_id`),
  ADD UNIQUE KEY `level` (`level`);

--
-- Indeksy dla tabeli `job_requirements`
--
ALTER TABLE `job_requirements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indeksy dla tabeli `job_responibilities`
--
ALTER TABLE `job_responibilities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indeksy dla tabeli `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`language_id`),
  ADD UNIQUE KEY `language` (`language`);

--
-- Indeksy dla tabeli `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `level_id` (`level_id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `work_mode_id` (`work_mode_id`),
  ADD KEY `work_dimension_id` (`work_dimension_id`),
  ADD KEY `fk_post_contract_type` (`contract_type_id`);

--
-- Indeksy dla tabeli `post_ability`
--
ALTER TABLE `post_ability`
  ADD KEY `post_id` (`post_id`),
  ADD KEY `ability_id` (`ability_id`);

--
-- Indeksy dla tabeli `post_specialization`
--
ALTER TABLE `post_specialization`
  ADD KEY `post_id` (`post_id`),
  ADD KEY `specialization_id` (`specialization_id`);

--
-- Indeksy dla tabeli `specializations`
--
ALTER TABLE `specializations`
  ADD PRIMARY KEY (`specialization_id`),
  ADD UNIQUE KEY `specialization` (`specialization`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indeksy dla tabeli `user_abilities`
--
ALTER TABLE `user_abilities`
  ADD KEY `user_id` (`user_id`,`ability_id`),
  ADD KEY `fk_abilities` (`ability_id`);

--
-- Indeksy dla tabeli `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`user_address_id`),
  ADD KEY `city_id` (`city_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `user_education`
--
ALTER TABLE `user_education`
  ADD PRIMARY KEY (`education_id`),
  ADD KEY `fk_user_education` (`user_id`);

--
-- Indeksy dla tabeli `user_language`
--
ALTER TABLE `user_language`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `language_id` (`language_id`);

--
-- Indeksy dla tabeli `user_social_links`
--
ALTER TABLE `user_social_links`
  ADD PRIMARY KEY (`social_link_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `user_work`
--
ALTER TABLE `user_work`
  ADD PRIMARY KEY (`user_work_id`),
  ADD KEY `fk_user_work` (`user_id`);

--
-- Indeksy dla tabeli `work_dimension`
--
ALTER TABLE `work_dimension`
  ADD PRIMARY KEY (`work_dimension_id`),
  ADD UNIQUE KEY `work_dimension_name` (`work_dimension_name`);

--
-- Indeksy dla tabeli `work_mode`
--
ALTER TABLE `work_mode`
  ADD PRIMARY KEY (`work_mode_id`),
  ADD UNIQUE KEY `work_mode_name` (`work_mode_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abilities`
--
ALTER TABLE `abilities`
  MODIFY `ability_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `company_address`
--
ALTER TABLE `company_address`
  MODIFY `company_address_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contract_type`
--
ALTER TABLE `contract_type`
  MODIFY `contract_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `job_level`
--
ALTER TABLE `job_level`
  MODIFY `level_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `job_requirements`
--
ALTER TABLE `job_requirements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job_responibilities`
--
ALTER TABLE `job_responibilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `language_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `specializations`
--
ALTER TABLE `specializations`
  MODIFY `specialization_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_address`
--
ALTER TABLE `user_address`
  MODIFY `user_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_education`
--
ALTER TABLE `user_education`
  MODIFY `education_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_social_links`
--
ALTER TABLE `user_social_links`
  MODIFY `social_link_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_work`
--
ALTER TABLE `user_work`
  MODIFY `user_work_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `work_dimension`
--
ALTER TABLE `work_dimension`
  MODIFY `work_dimension_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `work_mode`
--
ALTER TABLE `work_mode`
  MODIFY `work_mode_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company_address`
--
ALTER TABLE `company_address`
  ADD CONSTRAINT `fk_city_id` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`),
  ADD CONSTRAINT `fk_company_id` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE;

--
-- Constraints for table `job_requirements`
--
ALTER TABLE `job_requirements`
  ADD CONSTRAINT `job_requirements_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;

--
-- Constraints for table `job_responibilities`
--
ALTER TABLE `job_responibilities`
  ADD CONSTRAINT `fk_res_post_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_post_contract_type` FOREIGN KEY (`contract_type_id`) REFERENCES `contract_type` (`contract_type_id`),
  ADD CONSTRAINT `fk_post_job_level` FOREIGN KEY (`level_id`) REFERENCES `job_level` (`level_id`),
  ADD CONSTRAINT `fk_post_work_dimension` FOREIGN KEY (`work_dimension_id`) REFERENCES `work_dimension` (`work_dimension_id`),
  ADD CONSTRAINT `fk_post_work_mode` FOREIGN KEY (`work_mode_id`) REFERENCES `work_mode` (`work_mode_id`),
  ADD CONSTRAINT `fk_posts_companies` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE;

--
-- Constraints for table `post_ability`
--
ALTER TABLE `post_ability`
  ADD CONSTRAINT `fk_post_abilities_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_post_ability_id` FOREIGN KEY (`ability_id`) REFERENCES `abilities` (`ability_id`);

--
-- Constraints for table `post_specialization`
--
ALTER TABLE `post_specialization`
  ADD CONSTRAINT `fk_post_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_specialization_id` FOREIGN KEY (`specialization_id`) REFERENCES `specializations` (`specialization_id`);

--
-- Constraints for table `user_abilities`
--
ALTER TABLE `user_abilities`
  ADD CONSTRAINT `fk_abilities` FOREIGN KEY (`ability_id`) REFERENCES `abilities` (`ability_id`),
  ADD CONSTRAINT `fk_user_abilities` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_address`
--
ALTER TABLE `user_address`
  ADD CONSTRAINT `fk_user_address__id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_user_city__id` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`);

--
-- Constraints for table `user_education`
--
ALTER TABLE `user_education`
  ADD CONSTRAINT `fk_user_education` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_language`
--
ALTER TABLE `user_language`
  ADD CONSTRAINT `fk_language_id` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`),
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_social_links`
--
ALTER TABLE `user_social_links`
  ADD CONSTRAINT `fk_user_social_link` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_work`
--
ALTER TABLE `user_work`
  ADD CONSTRAINT `fk_user_work` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
