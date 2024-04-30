const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dance')
		.setDescription('Станцевать'),
	async execute(interaction) {
		const gifs = [
			'https://media.tenor.com/jWRFHjiNdkgAAAAM/anime-dance.gif',
			'https://media.tenor.com/ThgCliFj4kEAAAAM/chainsaw-chainsaw-man.gif',
			'https://media.tenor.com/KDmXV7XX2ccAAAAM/ai-hoshino-oshi-no-ko.gif',
			'https://media.tenor.com/0VpC5eobdO8AAAAM/insomniacs-after-school-isaki-magari.gif',
			'https://media.tenor.com/PDdLI2JNricAAAAM/anime-dance.gif',
			'https://media.tenor.com/P7QN5kqyiSQAAAAM/aharen-san-aharen-san-anime.gif',
			'https://media.tenor.com/kHH0PlN0HrIAAAAM/dance-iruma.gif',
			'https://media.tenor.com/uh9GwqMDkSUAAAAM/anime-dance.gif',
			'https://media.tenor.com/NoLbDoZMRnMAAAAM/chika-dance.gif',
			'https://media.tenor.com/5Exb5rKjZ7YAAAAM/kageki-shoujo-anime.gif'
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ embeds: [embed] });
	},
};