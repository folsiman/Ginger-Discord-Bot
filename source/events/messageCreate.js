const { Events } = require('discord.js');
const { developers } = require('../config.json');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        const prefix = 'g.';

        if (message.content.startsWith(prefix) && !message.author.bot) {
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();

            if (!message.client.commands.has(commandName)) return;

            const command = message.client.commands.get(commandName);

            if (command.inDevelopment && !developers.includes(message.author.id)) {
                const embed = new EmbedBuilder()
                    .setColor(color_error)
                    .setTitle('Ошибка')
                    .setDescription('Эта команда находится в разработке и доступна только разработчикам бота!');
                return await message.reply({ embeds: [embed] });
            }

            try {
                command.execute(message, args);
            } catch (error) {
                console.error(error);

                const embed = new EmbedBuilder()
                    .setColor(color_error)
                    .setTitle('Ошибка')
                    .setDescription('Произошла ошибка при выполнении этой команды!');
                return await message.reply({ embeds: [embed] });
            }
        }
    },
};