const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { color_main } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Информация о боте'),
	async execute(interaction) {
        const idea = new ButtonBuilder()
			.setCustomId('idea')
			.setLabel('Предложить идею')
			.setStyle(ButtonStyle.Secondary);

        const bug = new ButtonBuilder()
			.setCustomId('bug')
			.setLabel('Рассказать о баге')
			.setStyle(ButtonStyle.Secondary);

		const row = new ActionRowBuilder()
			.addComponents(idea, bug);

		const embed = new EmbedBuilder()
			.setColor(color_main)
			.setDescription(`🌟 Привет! Я - Ginger, твой веселый друг на Discord, создана чисто с любовью и энтузиазмом 10-классником для сдачи проекта по информатике. В мой функционал входит лишь выдача реакций по команде. Чем же я лучше кнопки GIF справа снизу от строки для ввода сообщения в чат? Тем что я отправляю реакции в виде embed и мой интерфейс из-за этого более приятно использовать. Рада буду помочь тебе сделать твой сервер более интересным! Давай зажигать вместе! 🌟
            `)
            .addFields(
                {name: 'Информация', value: `Разработчик: [Folsiman](https://discordapp.com/users/705189788130476174)\nСоздана: \`${interaction.client.user.createdAt.toLocaleDateString()} (${interaction.client.user.createdAt.toLocaleTimeString()})\`\nВерсия: **1.0.0**\nСерверов: **${interaction.client.guilds.cache.size}**`, inline: false},
            )
		await interaction.reply({ embeds: [embed], components: [row] });
	},
};