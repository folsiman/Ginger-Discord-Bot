const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
const { color_main } = require('../config.json');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`Команда, соответствующая ${interaction.commandName}, не найдена.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Ошибка выполнения ${interaction.commandName}`);
				console.error(error);
			}
		} else if (interaction.isButton()) {
			if (interaction.customId === 'idea') {
				const modal = new ModalBuilder()
					.setCustomId('modal_idea')
					.setTitle('Предложить идею');

				const ideaInput = new TextInputBuilder()
					.setCustomId('ideaInput')
					.setLabel("Какую идею вы хотите предложить?")
					.setStyle(TextInputStyle.Paragraph);

				const actionRow = new ActionRowBuilder().addComponents(ideaInput);

				modal.addComponents(actionRow);

				await interaction.showModal(modal);
			} else if (interaction.customId === 'bug') {
				const modal = new ModalBuilder()
					.setCustomId('modal_bug')
					.setTitle('Рассказать о баге');

				const bugInput = new TextInputBuilder()
					.setCustomId('bugInput')
					.setLabel("Какой произошел баг?")
					.setStyle(TextInputStyle.Paragraph);

				const actionRow = new ActionRowBuilder().addComponents(bugInput);

				modal.addComponents(actionRow);

				await interaction.showModal(modal);
			}
		} else if (interaction.isModalSubmit()) {
			if (interaction.customId === 'modal_idea') {
				const idea = interaction.fields.getTextInputValue('ideaInput');

				const embed = new EmbedBuilder()
					.setColor(color_main)
					.setTitle('Новая идея')
					.setDescription(`> ${idea}`);

				const channel = interaction.client.channels.cache.get('1233444857440112783');
				await channel.send({ embeds: [embed] });

				await interaction.reply({ content: 'Ваша идея была отправлена. Благодарим вас за помощь!', ephemeral: true });
			} else if (interaction.customId === 'modal_bug') {
				const bug = interaction.fields.getTextInputValue('bugInput');

				const embed = new EmbedBuilder()
					.setColor(color_main)
					.setTitle('Произошел баг')
					.setDescription(`> ${bug}`);

				const channel = interaction.client.channels.cache.get('1233444857440112783');
				await channel.send({ embeds: [embed] });

				await interaction.reply({ content: 'Ваш баг был отправлен. Благодарим вас за помощь!', ephemeral: true });
			}
		}
	},
};