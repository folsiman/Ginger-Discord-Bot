const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Обнять пользователя')
		.addUserOption(option =>
			option
				.setName('member')
				.setDescription('Пользователь')
				.setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getUser('member');

		const gifs = [
			'https://media.tenor.com/kCZjTqCKiggAAAAM/hug.gif',
			'https://media.tenor.com/P54lVoy1FxkAAAAM/kuzu-no-honkai-hug.gif',
			'https://media.tenor.com/S_RwcMaNX3sAAAAM/yuri-cuddle.gif',
			'https://media.tenor.com/7oCaSR-q1kkAAAAM/alice-vt.gif',
			'https://media1.tenor.com/m/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif',
			'https://media.tenor.com/wUQH5CF2DJ4AAAAM/horimiya-hug-anime.gif',
			'https://media.tenor.com/HYkaTQBybO4AAAAM/hug-anime.gif',
			'https://media.tenor.com/7f9CqFtd4SsAAAAM/hug.gif',
			'https://media.tenor.com/MtmdE7YibpkAAAAM/hestia-hug.gif',
			'https://media.tenor.com/TsEh_PJhTKwAAAAM/pjsk-pjsk-anime.gif',
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ content: `${member}`, embeds: [embed] });
	},
};