CREATE TABLE `quest` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`completed` integer DEFAULT false,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP'
);
