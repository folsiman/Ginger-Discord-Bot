const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nom')
		.setDescription('Покормить пользователя')
		.addUserOption(option =>
			option
				.setName('member')
				.setDescription('Пользователь')
				.setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getUser('member');

		const gifs = [
			'https://media.tenor.com/Aflxvrwa0woAAAAM/kawaii-wholesome.gif',
			'https://media.tenor.com/CHTk5L8ls8cAAAAM/eat-food.gif',
			'https://media.tenor.com/y_xVq9Ea-YUAAAAM/anime-acchi-kocchi.gif',
			'https://media.tenor.com/Kpw8-sodxCcAAAAM/feed.gif',
			'https://media.tenor.com/LnyFkFCz0ucAAAAM/reina-aharen-meatball.gif',
			'https://media.tenor.com/cIBueMKgEfEAAAAM/surprise-kiss.gif',
			'https://media.tenor.com/gIbE9pZ7raYAAAAM/wataten-watashi-ni-tenshi-ga-maiorita.gif',
			'https://media.tenor.com/qi8MqDKmpl8AAAAM/lycoris-recoil-chisato.gif',
			'https://media.tenor.com/gZg3q6tw0TQAAAAM/yuuki-asuna-sword-art-online.gif',
			'https://media.tenor.com/kpnY1JZYyLMAAAAM/anime-feed.gif'
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ content: `${member}`, embeds: [embed] });
	},
};