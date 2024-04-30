const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cry')
		.setDescription('Погрустить'),
	async execute(interaction) {
		const gifs = [
			'https://media.tenor.com/A0g9Rrx4aNsAAAAM/sad-angry.gif',
			'https://media.tenor.com/0qj0aqZ0nucAAAAM/anya-spy-x-family-anime-anya-crying.gif',
			'https://media1.tenor.com/m/3mscVoYlvOcAAAAd/ruby-hoshino-oshi-no-ko.gif',
			'https://media.tenor.com/yn-FwjzdvzMAAAAM/my-dress-up-darling-marin-kitagawa.gif',
			'https://media.tenor.com/flFnpybu8OkAAAAM/akane-kurokawa-oshi-no-ko.gif',
			'https://media.tenor.com/_eEcwl8Mn50AAAAM/akebi-chan-no-sailor-anime-cry.gif',
			'https://media.tenor.com/NMiID29TUvIAAAAM/hunter-x-hunter-gon-freecs.gif',
			'https://media.tenor.com/Mlgi6bkVkG8AAAAM/emotional-cry.gif',
			'https://media.tenor.com/cpDRqZxQvYQAAAAM/sorry-anime.gif',
			'https://media.tenor.com/iLm3jR0AOKUAAAAM/anime-anime-cry.gif'
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ embeds: [embed] });
	},
};
