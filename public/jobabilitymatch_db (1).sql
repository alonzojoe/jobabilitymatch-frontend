-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2025 at 08:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobabilitymatch_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `job_posting_id` bigint(20) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Pending',
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `user_id`, `job_posting_id`, `status`, `active`, `created_at`, `updated_at`) VALUES
(9, 2, 2, 'For Interview', 0, '2025-05-18 18:29:02', '2025-05-18 23:51:46');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` longtext DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `address`, `user_id`, `status`, `created_at`, `updated_at`) VALUES
(2, 'MCDONALD\'S PHILIPPINES', 'DOLORES CITY OF SAN FERNANDO PAMPANGA', 5, 1, '2025-05-02 18:10:43', '2025-05-02 18:10:43'),
(3, 'JOLLIBEE FOOD CORPORATION', 'DOLORES CITY OF SAN FERNANDO PAMPANGA', 6, 1, '2025-05-02 19:07:30', '2025-05-11 17:28:42'),
(4, 'CHOWKING PH', 'DOWNTOWN SAN FERNANDO PAMPANGA', 8, 1, '2025-05-11 18:24:41', '2025-05-19 21:45:10'),
(5, 'STARBUCKS PHILIPPINES', 'BUSINESS CENTER, MACARTHUR HWY, SAN FERNANDO, 2000 PAMPANGA', 10, 1, '2025-05-19 19:40:29', '2025-05-19 19:40:29'),
(6, 'ARTISTA SALON', 'B. MENDOZA ST. SAN FERNANDO CITY, PAMPANGA', 11, 1, '2025-05-19 21:34:14', '2025-05-19 21:34:14');

-- --------------------------------------------------------

--
-- Table structure for table `disability_types`
--

CREATE TABLE `disability_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `disability_types`
--

INSERT INTO `disability_types` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Psychosocial Disability', 1, '2025-05-01 00:47:42', '2025-05-01 00:47:42'),
(2, 'Mental Disability', 1, '2025-05-01 00:47:48', '2025-05-01 00:47:48'),
(3, 'Visual Disability', 1, '2025-05-01 00:47:53', '2025-05-01 00:47:53'),
(4, 'Orthopedic Disability', 1, '2025-05-01 00:47:58', '2025-05-01 00:47:58'),
(5, 'Communication Disability', 1, '2025-05-01 00:48:04', '2025-05-01 00:48:04'),
(6, 'Hearing Disability', 1, '2025-05-01 00:48:09', '2025-05-01 00:48:09'),
(7, 'Speech Impairment', 1, '2025-05-01 00:48:15', '2025-05-01 00:48:15'),
(8, 'Learning Disability', 1, '2025-05-01 00:48:24', '2025-05-01 00:48:24');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_postings`
--

CREATE TABLE `job_postings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `vacant_positions` int(11) DEFAULT NULL,
  `company_id` bigint(20) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_postings`
--

INSERT INTO `job_postings` (`id`, `title`, `description`, `vacant_positions`, `company_id`, `active`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Food Crew', '<p><strong>Jollibee Hiring – Be Part of Our Team!</strong></p><p>We are looking for dedicated individuals to join us in delivering quality food and excellent customer service.</p><h3><strong>Job Responsibilities:</strong></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Food Preparation &amp; Quality Control:</strong> Ensure food items meet company standards in safety and quality.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Customer Service &amp; Engagement:</strong> Assist customers courteously and fulfill their needs.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Cleanliness &amp; Hygiene Compliance:</strong> Maintain cleanliness in food preparation areas, following Jollibee\'s strict hygiene protocols.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Cash Handling &amp; Team Support:</strong> Process transactions and provide assistance to team members as needed.</li></ol><p>📍 <strong>Application Details:</strong> Walk into <strong>Jollibee Food Corporation, Dolores, City of San Fernando, Pampanga</strong> with the following: ✅ Resume ✅ PWD ID ✅ Other supporting documents</p>', 3, 3, 1, 1, '2025-05-04 17:20:37', '2025-05-06 00:17:41'),
(3, 'Delivery rider', '<p><strong>Delivery Rider – Join Our Team!</strong></p><p>We are looking for reliable and motivated individuals to join us as delivery riders, ensuring timely and efficient deliveries while providing excellent customer service.</p><p><strong>Job Responsibilities:</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Order Pickup &amp; Delivery:</strong> Collect food orders from the store and deliver them to customers promptly.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Customer Service:</strong> Interact with customers courteously and ensure orders are handed over professionally.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Safety &amp; Compliance:</strong> Follow traffic regulations and company guidelines for safe and efficient delivery.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Cash Handling &amp; Order Accuracy:</strong> Process cash transactions when necessary and verify order completeness before delivery.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Vehicle Maintenance:</strong> Ensure the delivery vehicle or motorcycle is in good condition and report any necessary repairs.</li></ol><p>📍 <strong>Application Details:</strong> Applicants may visit our branch and bring the following: ✅ Resume ✅ Valid Driver’s License ✅ PWD ID (if applicable) ✅ Other supporting documents</p>', 2, 3, 2, 1, '2025-05-05 17:57:32', '2025-05-06 18:58:49'),
(4, 'Barista', '<p><strong>🌟 Starbucks Philippines – Join Our Team! 🌟</strong></p><p><strong>Job Title:</strong> Inclusive Barista (PWD-Friendly)</p><p><strong>Vacant Positions:</strong> Multiple openings available</p><p>📍 <strong>Location:</strong> Business Center, MacArthur Hwy, San Fernando, 2000 Pampanga</p><p><strong>Job Description:</strong></p><p>At Starbucks Philippines, we believe in diversity, inclusivity, and creating meaningful connections through great coffee. We are looking for passionate individuals to join our team and contribute to a welcoming environment for all.</p><p><strong>Job Responsibilities:</strong></p><p>☕ <strong>Crafting Beverages &amp; Quality Control</strong> – Prepare handcrafted drinks following Starbucks standards for taste and presentation.</p><p>💬 <strong>Customer Service &amp; Experience</strong> – Provide a warm, friendly, and accommodating service experience for all guests.</p><p>🧼 <strong>Store Cleanliness &amp; Hygiene Compliance</strong> – Maintain a clean and organized workspace while following food safety regulations.</p><p>💵 <strong>Transaction &amp; Inventory Management</strong> – Process orders efficiently and support stock management as required.</p><p>🤝 <strong>Team Collaboration &amp; Inclusivity</strong> – Work closely with fellow partners to foster teamwork and a positive store culture.</p><p>📍 <strong>Application Details:</strong></p><p>Walk into <strong>Starbucks Philippines - Business Center, MacArthur Hwy, San Fernando, Pampanga</strong> with the following:</p><p>✅ <strong>Resume</strong></p><p>✅ <strong>PWD ID (if applicable)</strong></p><p>✅ <strong>Other supporting documents</strong></p><p>We are committed to providing equal opportunities for all aspiring baristas. Join us and be part of an inspiring community that serves coffee with heart. ☕💚</p>', 3, 5, 1, 1, '2025-05-19 19:48:15', '2025-05-19 19:49:05'),
(5, 'Café Operations Associate', '<p><strong>🌟 Starbucks Philippines – Hiring Now! 🌟</strong></p><p><strong>Job Title:</strong> Café Operations Associate (PWD-Friendly)</p><p><strong>Vacant Positions:</strong> Multiple openings available</p><p>📍 <strong>Location:</strong> Business Center, MacArthur Hwy, San Fernando, 2000 Pampanga</p><p><strong>Job Description:</strong></p><p>We’re looking for dedicated individuals who are passionate about coffee and creating meaningful connections. As a <strong>Café Operations Associate</strong>, you’ll play a key role in ensuring a smooth and welcoming store experience for both customers and partners.</p><p><strong>Job Responsibilities:</strong></p><p>🥤 <strong>Store Operations Support</strong> – Assist in maintaining daily store functions, ensuring efficiency in customer service and operations.</p><p>🍽️ <strong>Food &amp; Beverage Assistance</strong> – Provide support in preparing simple food items, ensuring quality and adherence to Starbucks standards.</p><p>🧹 <strong>Cleanliness &amp; Hygiene Compliance</strong> – Maintain a clean and organized environment, helping uphold food safety guidelines.</p><p>📦 <strong>Inventory &amp; Stock Monitoring</strong> – Assist in monitoring supplies, helping with stock replenishment when needed.</p><p>🤝 <strong>Team Collaboration &amp; Guest Engagement</strong> – Work alongside fellow partners to create a warm, inclusive, and customer-focused atmosphere.</p><p>📍 <strong>Application Details:</strong></p><p>Walk into <strong>Starbucks Philippines - Business Center, MacArthur Hwy, San Fernando, Pampanga</strong> with the following:</p><p>✅ <strong>Resume</strong></p><p>✅ <strong>PWD ID</strong></p><p>✅ <strong>Other supporting documents</strong></p><p>We value diversity and encourage applications from all individuals, including PWD candidates. Join Starbucks and be part of a team that fosters connection and inclusivity! ☕💚</p>', 2, 5, 1, 1, '2025-05-19 19:51:38', '2025-05-19 21:40:43'),
(6, 'Massage Therapist', '<p>Artista Salon is looking for skilled and passionate <strong>Massage Therapists</strong> to provide relaxation and therapeutic services to clients. We are committed to inclusivity and welcome <strong>PWD applicants</strong> to join our team in delivering high-quality wellness experiences.</p><p><strong>Job Responsibilities:</strong></p><p>💆 <strong>Massage Therapy &amp; Wellness Services</strong> – Perform various massage techniques to relieve stress, tension, and muscle discomfort.</p><p>🗣️ <strong>Client Consultation &amp; Care</strong> – Assess client needs, recommend suitable treatments, and ensure a comfortable experience.</p><p>🧼 <strong>Hygiene &amp; Safety Compliance</strong> – Maintain cleanliness and adhere to health and safety protocols in the salon.</p><p>📦 <strong>Product &amp; Service Knowledge</strong> – Stay updated on massage techniques, wellness trends, and salon offerings.</p><p>🤝 <strong>Team Collaboration &amp; Inclusivity</strong> – Work alongside salon professionals to create a welcoming and supportive environment.</p><p>📍 <strong>Application Details:</strong></p><p>Walk into <strong>Artista Salon - B. Mendoza St., San Fernando City, Pampanga</strong> with the following:</p><p>✅ <strong>Resume</strong></p><p>✅ <strong>PWD ID (required for application)</strong></p><p>✅ <strong>Other supporting documents</strong></p><p>Join Artista Salon and be part of a team that values wellness, inclusivity, and professional growth! 💆‍♂️💚</p>', 5, 6, 1, 1, '2025-05-19 21:35:11', '2025-05-19 21:38:07'),
(7, 'Manicurist & Nail Care Specialist', '<p>Artista Salon is looking for skilled <strong>Manicurists</strong> to provide high-quality nail care services. We are committed to inclusivity and welcome <strong>PWD applicants</strong> to join our team in delivering professional beauty treatments.</p><p><strong>Job Responsibilities:</strong></p><p> 💅 <strong>Manicure &amp; Pedicure Services</strong> – Perform nail care treatments, including shaping, polishing, and cuticle maintenance.</p><p> 🎨 <strong>Nail Art &amp; Design</strong> – Apply creative nail designs, gel polish, and acrylic enhancements based on client preferences.</p><p> 🧼 <strong>Hygiene &amp; Safety Compliance</strong> – Maintain cleanliness and sterilization of tools and workstations.</p><p> 🗣️ <strong>Client Consultation &amp; Care</strong> – Provide recommendations on nail health and beauty treatments.</p><p> 🤝 <strong>Team Collaboration &amp; Inclusivity</strong> – Work alongside salon professionals to create a welcoming and supportive environment.</p><p>📍 <strong>Application Details:</strong></p><p> Walk into <strong>Artista Salon - B. Mendoza St., San Fernando City, Pampanga</strong> with the following:</p><p> ✅ <strong>Resume</strong></p><p> ✅ <strong>PWD ID (required for application)</strong></p><p> ✅ <strong>Other supporting documents</strong></p><p>Join Artista Salon and be part of a team that values beauty, inclusivity, and professional growth! 💅💚</p>', 3, 6, 1, 1, '2025-05-19 21:39:56', '2025-05-19 21:39:56'),
(8, 'Food Crew', '<p>Chowking Philippines is looking for <strong>dedicated Food Crew members</strong> to be part of our team. We are committed to inclusivity and welcome <strong>PWD applicants</strong> to join us in delivering excellent Chinese-inspired food and service.</p><p><strong>Job Responsibilities:</strong></p><p> 🍽 <strong>Food Preparation &amp; Service</strong> – Assist in preparing high-quality food items while maintaining hygiene standards.</p><p> 💬 <strong>Customer Assistance &amp; Engagement</strong> – Provide courteous service and support customers in ordering their meals.</p><p> 🧼 <strong>Cleanliness &amp; Sanitation Compliance</strong> – Ensure workstations, dining areas, and food prep spaces remain clean and safe.</p><p> 💵 <strong>Cash Handling &amp; Order Processing</strong> – Support cash transactions and order fulfillment as needed.</p><p> 🤝 <strong>Teamwork &amp; Workplace Inclusivity</strong> – Collaborate with fellow crew members to foster a welcoming and efficient environment.</p><p>📍 <strong>Application Details:</strong></p><p> Walk into <strong>Chowking Philippines - Jose Abad Santos Ave, San Fernando, Pampanga</strong> with the following:</p><p> ✅ <strong>Resume</strong></p><p> ✅ <strong>PWD ID (required for application)</strong></p><p> ✅ <strong>Other supporting documents</strong></p><p>Be part of Chowking’s commitment to excellence, inclusivity, and great service! 🍜💚</p>', 5, 4, 1, 1, '2025-05-19 21:46:44', '2025-05-19 21:46:44'),
(9, 'Kitchen Staff', '<p>Chowking Philippines is looking for <strong>dedicated Kitchen Staff</strong> to join our team. We welcome <strong>PWD applicants</strong> who have a passion for food preparation and teamwork in a fast-paced environment.</p><p><strong>Job Responsibilities:</strong></p><p>🔪 <strong>Food Preparation &amp; Cooking Support</strong> – Assist in preparing ingredients, cooking meals, and following Chowking’s quality standards.</p><p>🧼 <strong>Cleanliness &amp; Food Safety Compliance</strong> – Maintain a clean and sanitary kitchen workspace in line with health regulations.</p><p>📦 <strong>Inventory &amp; Stock Management</strong> – Support kitchen operations by monitoring supplies and restocking as needed.</p><p>💬 <strong>Team Collaboration &amp; Efficiency</strong> – Work alongside kitchen professionals to ensure smooth food service operations.</p><p>🤝 <strong>Inclusivity &amp; Workplace Support</strong> – Contribute to an inclusive and respectful work culture.</p><p>📍 <strong>Application Details:</strong></p><p>Walk into <strong>Chowking Philippines - Jose Abad Santos Ave, San Fernando, Pampanga</strong> with the following:</p><p>✅ <strong>Resume</strong></p><p>✅ <strong>PWD ID (required for application)</strong></p><p>✅ <strong>Other supporting documents</strong></p><p>Be part of Chowking’s commitment to excellence, inclusivity, and great service! 🍜💚</p>', 3, 4, 1, 1, '2025-05-19 21:48:30', '2025-05-19 21:48:47'),
(10, 'Cashier', '<p>Chowking Philippines is looking for <strong>dedicated Cashiers</strong> to join our team. We welcome <strong>PWD applicants</strong> who have a passion for customer service and efficiency in handling transactions.</p><p><strong>Job Responsibilities:</strong></p><p> 💵 <strong>Transaction Processing &amp; Payment Handling</strong> – Manage customer payments accurately using cash registers.</p><p> 🧾 <strong>Issuing Receipts &amp; Handling Refunds</strong> – Ensure correct pricing, issue receipts, and process refunds when necessary.</p><p> 💬 <strong>Customer Assistance &amp; Service</strong> – Greet customers warmly and assist with inquiries or concerns.</p><p> 📦 <strong>Inventory &amp; Cash Monitoring</strong> – Help track cash flow and ensure proper handling of store funds.</p><p> 🤝 <strong>Team Collaboration &amp; Inclusivity</strong> – Work alongside fellow crew members to foster a welcoming and efficient environment.</p><p>📍 <strong>Application Details:</strong></p><p> Walk into <strong>Chowking Philippines - Jose Abad Santos Ave, San Fernando, Pampanga</strong> with the following:</p><p> ✅ <strong>Resume</strong></p><p> ✅ <strong>PWD ID (required for application)</strong></p><p> ✅ <strong>Other supporting documents</strong></p><p>Be part of Chowking’s commitment to great food, inclusivity, and excellent service! 🍜</p>', 3, 4, 1, 1, '2025-05-19 21:50:49', '2025-05-19 21:50:49');

-- --------------------------------------------------------

--
-- Table structure for table `job_posting_disability_types`
--

CREATE TABLE `job_posting_disability_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_posting_id` bigint(20) DEFAULT NULL,
  `disability_type_id` bigint(20) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_posting_disability_types`
--

INSERT INTO `job_posting_disability_types` (`id`, `job_posting_id`, `disability_type_id`, `status`, `created_at`, `updated_at`) VALUES
(13, 2, 6, 1, '2025-05-04 17:28:49', '2025-05-04 17:28:49'),
(14, 2, 4, 1, '2025-05-04 17:28:49', '2025-05-04 17:28:49'),
(15, 2, 8, 1, '2025-05-04 17:28:49', '2025-05-04 17:28:49'),
(16, 3, 8, 1, '2025-05-05 17:57:32', '2025-05-05 17:57:32'),
(17, 3, 2, 1, '2025-05-05 17:57:32', '2025-05-05 17:57:32'),
(20, 4, 8, 1, '2025-05-19 19:49:05', '2025-05-19 19:49:05'),
(21, 4, 1, 1, '2025-05-19 19:49:05', '2025-05-19 19:49:05'),
(26, 6, 3, 1, '2025-05-19 21:38:07', '2025-05-19 21:38:07'),
(27, 6, 6, 1, '2025-05-19 21:38:07', '2025-05-19 21:38:07'),
(28, 7, 1, 1, '2025-05-19 21:39:56', '2025-05-19 21:39:56'),
(29, 7, 7, 1, '2025-05-19 21:39:56', '2025-05-19 21:39:56'),
(30, 5, 1, 1, '2025-05-19 21:40:43', '2025-05-19 21:40:43'),
(31, 5, 8, 1, '2025-05-19 21:40:43', '2025-05-19 21:40:43'),
(32, 8, 8, 1, '2025-05-19 21:46:44', '2025-05-19 21:46:44'),
(33, 8, 5, 1, '2025-05-19 21:46:44', '2025-05-19 21:46:44'),
(36, 9, 7, 1, '2025-05-19 21:48:47', '2025-05-19 21:48:47'),
(37, 9, 5, 1, '2025-05-19 21:48:47', '2025-05-19 21:48:47'),
(38, 10, 8, 1, '2025-05-19 21:50:49', '2025-05-19 21:50:49'),
(39, 10, 1, 1, '2025-05-19 21:50:49', '2025-05-19 21:50:49');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_04_24_012235_create_user_disability_types', 1),
(6, '2025_04_24_020228_create_disability_types_table', 1),
(7, '2025_04_24_021359_create_job_postings_table', 1),
(8, '2025_04_24_024800_create_job_posting_disability_types', 1),
(9, '2025_04_24_030458_create_companies_table', 1),
(10, '2025_04_24_031902_create_applicants_table', 1),
(11, '2025_04_24_032612_create_roles_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 1, '2025-04-30 22:05:51', '2025-04-30 22:11:07'),
(2, 'PWD', 1, '2025-04-30 22:06:42', '2025-04-30 22:06:42'),
(3, 'Employer', 1, '2025-04-30 22:06:49', '2025-04-30 22:06:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `middlename` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `address` longtext DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `pwd_id_no` varchar(255) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `lastname`, `firstname`, `middlename`, `birthdate`, `gender`, `address`, `phone`, `pwd_id_no`, `role_id`, `email`, `email_verified_at`, `password`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'ALONZO', 'JOENELL', 'CANLAS', '2000-01-01', 'MALE', 'SAN FERNANDO PAMPANGA', '09526325412', NULL, 1, 'administrator@gmail.com', NULL, '$2y$10$noNuET3OZAjCTCmgUlrOt.J5r90dFcPW2mWGeAxWqSoiVEbHqKMbi', 1, NULL, '2025-05-01 00:23:18', '2025-05-12 19:53:42'),
(2, 'DELA CRUZ', 'JUAN', 'DE LEON', '1999-01-01', 'MALE', 'DOLORES, SAN FERNANDO PAMPANGA', '0909590590', '250-0560-056', 2, 'delacruzjuan@gmail.com', NULL, '$2y$10$3X8S8OkJ5OF4nlquZMLSZOVp7CiqlkQiGIG4Xev8OvC6VdnL8uw.m', 1, NULL, '2025-05-01 00:57:04', '2025-05-19 17:32:21'),
(5, 'MARQUEZ', 'MELANIE', 'SANTOS', '1995-02-05', 'FEMALE', 'MAIMPIS SAN FERNANDO PAMPANGA', '0996541235', NULL, 3, 'melaniemarquez@gmail.com', NULL, '$2y$10$SfCx/ubPJT0zbpM0M75ezuUJCbj9zCrgh1Umnqg2/O6SxJH6y5u6i', 1, NULL, '2025-05-02 18:10:43', '2025-05-02 18:10:43'),
(6, 'CANLAS', 'LOUISE', 'DE LEON', '1993-05-25', 'FEMALE', 'DEL PILAR SAN FERNANDO PAMPANGA', '0923262622', NULL, 3, 'canlaslouise@gmail.com', NULL, '$2y$10$1iavGEOm18UIAFg0paCUbuWv3Km/J/INtuvfl7UmhKeyuA3ttw.YK', 1, NULL, '2025-05-02 19:07:30', '2025-05-18 21:46:11'),
(7, 'DAVID', 'MARY', 'DIZON', '2000-01-01', 'FEMALE', 'MAIMPIS SAN FERNANDO PAMPANGA', '0923262626', '24-234524-23', 2, 'davidmary@gmail.com', NULL, '$2y$10$EYiaxIxdN5x5lqIQC72Fre986Oz1W9DSH1cGMaUOVt6C/HCSqSFyO', 1, NULL, '2025-05-06 23:01:26', '2025-05-06 23:01:26'),
(8, 'AGUINALDO', 'ANNE', 'QUIAMBAO', '1992-04-01', 'FEMALE', 'SAN FERNANDO PAMPANGA', '0959595905', NULL, 3, 'aguinaldoanne@gmail.com', NULL, '$2y$10$uCxUxuOp1A/1t0volWkQCeYQfd6w.V.Sqif2ZIqYpJ6k7DBdjTmIy', 1, NULL, '2025-05-11 18:24:41', '2025-05-11 18:24:41'),
(10, 'MANESE', 'CANDICE', 'PINGUL', '1995-01-05', 'FEMALE', 'SAN FERNANDO PAMPANGA', '0959590000', NULL, 3, 'manesecandice@gmail.com', NULL, '$2y$10$M0e3.B6S/xo1zPEtpAcp7OYSPDlr1PdaXJK3RaZ/c0.vNkh9q33KC', 1, NULL, '2025-05-19 19:40:29', '2025-05-19 19:40:29'),
(11, 'DUENAS', 'CLAIRE', 'PINGUL', '1996-06-25', 'FEMALE', 'MAIMPIS CITY OF SAN FERNANDO PAMPANGA', '0959590595', NULL, 3, 'duenasclaire@gmail.com', NULL, '$2y$10$xBQGjYRxdvOuS6J8HnUaGuAQqeDWETkioWAAydN7zMnw9zr9KK/by', 1, NULL, '2025-05-19 21:34:14', '2025-05-19 21:34:14');

-- --------------------------------------------------------

--
-- Table structure for table `user_disability_types`
--

CREATE TABLE `user_disability_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `disability_type_id` bigint(20) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_disability_types`
--

INSERT INTO `user_disability_types` (`id`, `user_id`, `disability_type_id`, `status`, `created_at`, `updated_at`) VALUES
(3, 7, 6, 1, '2025-05-06 23:01:26', '2025-05-06 23:01:26'),
(4, 7, 3, 1, '2025-05-06 23:01:26', '2025-05-06 23:01:26'),
(15, 2, 6, 1, '2025-05-19 00:31:54', '2025-05-19 00:31:54'),
(16, 2, 4, 1, '2025-05-19 00:31:54', '2025-05-19 00:31:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disability_types`
--
ALTER TABLE `disability_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `job_postings`
--
ALTER TABLE `job_postings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_posting_disability_types`
--
ALTER TABLE `job_posting_disability_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_disability_types`
--
ALTER TABLE `user_disability_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `disability_types`
--
ALTER TABLE `disability_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_postings`
--
ALTER TABLE `job_postings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `job_posting_disability_types`
--
ALTER TABLE `job_posting_disability_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user_disability_types`
--
ALTER TABLE `user_disability_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
