const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wave')
		.setDescription('Помахать пользователю'),
	async execute(interaction) {
		const gifs = [
			'https://media.tenor.com/vNapCUP0d3oAAAAM/pjsk-pjsk-anime.gif',
			'https://media.tenor.com/1MfQk9vFF7MAAAAM/anime-bye-bye-maki.gif',
			'https://media.tenor.com/H4xLf6epW-wAAAAM/anime-wave.gif',
			'https://media.tenor.com/VGvT1NOxOrIAAAAM/the-greatest-demon-lord-is-reborn-as-a-typical-nobody-ginny.gif',
			'https://media.tenor.com/FMpLzF4UJhwAAAAM/kisumi-wave.gif',
			'https://media.tenor.com/ywCocDUt31QAAAAM/anime-wave.gif',
			'https://media.tenor.com/AuBOgaPV41cAAAAM/shinya-shinyahiragi.gif',
			'https://media.tenor.com/EERR4LXoJBoAAAAM/hi-wave.gif',
			'https://media.tenor.com/TQ3Jul8r2DwAAAAM/anime-boy.gif',
			'https://media.tenor.com/MmTMEtRSIOUAAAAM/nijima-ibuki-d4dj-first-mix.gif',
		];

		const getRandomGifIndex = () => Math.floor(Math.random() * gifs.length);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setImage(gifs[getRandomGifIndex()]);
		await interaction.reply({ embeds: [embed] });
	},
};