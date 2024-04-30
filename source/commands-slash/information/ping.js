const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Информация о задержке'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setDescription(`>>> Пульс веб-сокета: \`${interaction.client.ws.ping}ms\`\nЗадержка туда и обратно: \`${sent.createdTimestamp - interaction.createdTimestamp}ms\``);
		await interaction.editReply({ content: 'Ready!', embeds: [embed] });
	},
};