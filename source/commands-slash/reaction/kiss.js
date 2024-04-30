const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Поцеловать пользователя')
		.addUserOption(option =>
			option
				.setName('member')
				.setDescription('Пользователь')
				.setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getUser('member');

		const gifs = [
			'https://media.tenor.com/05pHS9Wn_hcAAAAM/engage-kiss-anime-kiss.gif',
			'https://media.tenor.com/IAP6odUutZMAAAAM/kiss.gif',
			'https://media.tenor.com/b7DWF8ecBkIAAAAM/kiss-anime-anime.gif',
			'https://media.tenor.com/9u2vmryDP-cAAAAM/horimiya-animes.gif',
			'https://media.tenor.com/BZyWzw2d5tAAAAAM/hyakkano-100-girlfriends.gif',
			'https://media.tenor.com/_X0Fb3lhi3AAAAAM/anime.gif',
			'https://media.tenor.com/lyuW54_wDU0AAAAM/kiss-anime.gif',
			'https://media.tenor.com/SZ8-4vDwi6cAAAAM/miyamura-hori.gif',
			'https://media.tenor.com/4wUL9KIdlJAAAAAM/kiss.gif',
			'https://media.tenor.com/3xrkm45MqkIAAAAM/anime-kiss.gif',
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ content: `${member}`, embeds: [embed] });
	},
};