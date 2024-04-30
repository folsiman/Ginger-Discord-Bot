const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('smoke')
		.setDescription('Закурить сигарету'),
	async execute(interaction) {
		const gifs = [
			'https://media.tenor.com/26VXnb94UpkAAAAM/himeno-chainsaw-man.gif',
			'https://media.tenor.com/TAZphoUm_X8AAAAM/chainsaw-man-csm.gif',
			'https://media.tenor.com/ua_VYLJfi4YAAAAM/cowboy-bebop-spike-spiegel.gif',
			'https://media.tenor.com/ZG80pnK4IyYAAAAM/smoke.gif',
			'https://media.tenor.com/a9hLvQOEd9UAAAAM/anime-smoking.gif',
			'https://media.tenor.com/ft0QAczmDS8AAAAM/rip-bozo.gif',
			'https://media.tenor.com/Wzi49q_0pI4AAAAM/brook-chill.gif',
			'https://media.tenor.com/FJ8kmkejJx4AAAAM/anime-cool.gif',
			'https://media.tenor.com/RyUSvLm258kAAAAM/anime-anime-smoke.gif',
			'https://media.tenor.com/RsFj4O1goJkAAAAM/smoking-smoke.gif',
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ embeds: [embed] });
	},
};