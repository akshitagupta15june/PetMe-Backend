-- AddForeignKey
ALTER TABLE `Donate_Pets` ADD CONSTRAINT `Donate_Pets_donate_user_id_fkey` FOREIGN KEY (`donate_user_id`) REFERENCES `Donate_User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donate_Pets` ADD CONSTRAINT `Donate_Pets_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `Pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `Pet_Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_breed_id_fkey` FOREIGN KEY (`breed_id`) REFERENCES `Pet_Breed`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_color_id_fkey` FOREIGN KEY (`color_id`) REFERENCES `Pet_Color`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
