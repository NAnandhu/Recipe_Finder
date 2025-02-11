-- CreateTable
CREATE TABLE `Signup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(50) NOT NULL,
    `LastName` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Signup_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
