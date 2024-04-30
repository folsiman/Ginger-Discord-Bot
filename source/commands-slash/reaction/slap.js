const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Ударить пользователя')
		.addUserOption(option =>
			option
				.setName('member')
				.setDescription('Пользователь')
				.setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getUser('member');

		const gifs = [
			'https://media.tenor.com/jgImPggI1ZMAAAAM/bakugo-anime-slap.gif',
			'https://media1.tenor.com/m/eU5H6GbVjrcAAAAC/slap-jjk.gif',
			'https://media.tenor.com/Ws6Dm1ZW_vMAAAAM/girl-slap.gif',
			'https://media.tenor.com/XiYuU9h44-AAAAAM/anime-slap-mad.gif',
			'https://media.tenor.com/E3OW-MYYum0AAAAM/no-angry.gif',
			'https://media.tenor.com/5jBuDXkDsjYAAAAM/slap.gif',
			'https://media.tenor.com/ra17G61QRQQAAAAM/tapa-slap.gif',
			'https://media.tenor.com/L0fsdBYmh_wAAAAM/kokoro-connect-slap-anime.gif',
			'https://media.tenor.com/AZEXwl2qX1cAAAAM/anime-cry.gif',
			'https://media.tenor.com/JFbsUkag74oAAAAM/noragami-yato.gif'
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ content: `${member}`, embeds: [embed] });
	},
};