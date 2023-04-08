"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          username: "johndoe",
          email: "jhon@gmail.com",
          password: bcrypt.hashSync("rahasia", 10),
          profession: "Back-End Developer",
          role: "admin",
          created_at: Date.now(),
          updated_at: Date.now(),
        },
        {
          name: "Ferdian Iqbal",
          username: "ferdianqbl",
          email: "ferdi@gmail.com",
          password: bcrypt.hashSync("rahasia", 10),
          profession: "Full-Stack Developer",
          role: "student",
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
