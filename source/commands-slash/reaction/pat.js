const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat')
		.setDescription('Погладить пользователя')
		.addUserOption(option =>
			option
				.setName('member')
				.setDescription('Пользователь')
				.setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getUser('member');

		const gifs = [
			'https://media.tenor.com/N41zKEDABuUAAAAM/anime-head-pat-anime-pat.gif',
			'https://media.tenor.com/N41zKEDABuUAAAAM/anime-head-pat-anime-pat.gif',
			'https://media.tenor.com/7xrOS-GaGAIAAAAM/anime-pat-anime.gif',
			'https://media.tenor.com/DCMl9bvSDSwAAAAM/pat-head-gakuen-babysitters.gif',
			'https://media.tenor.com/wLqFGYigJuIAAAAM/mai-sakurajima.gif',
			'https://media.tenor.com/mecnd_qE8p8AAAAM/anime-pat.gif',
			'https://media.tenor.com/oGbO8vW_eqgAAAAM/spy-x-family-anya.gif',
			'https://media.tenor.com/CIF_Pa3yepwAAAAM/rika-higurashi.gif',
			'https://media.tenor.com/pvF8xcytu1YAAAAM/pat.gif',
			'https://media.tenor.com/n6M5-pM2RiQAAAAM/anime-cry.gif'
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ content: `${member}`, embeds: [embed] });
	},
};