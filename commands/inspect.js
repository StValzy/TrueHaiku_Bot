const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("inspect")
    .setDescription("Replies with advanced user info"),
  async execute(interaction) {
    await interaction.reply();
  },
};
