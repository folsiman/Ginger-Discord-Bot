const { EmbedBuilder } = require('discord.js');
const { color_main, color_error } = require('../../config.json');

module.exports = {
    name: 'eval',
    description: 'Протестировать код',
    inDevelopment: true,
    async execute(message, args) {
        if (!args.length) {
            const embed = new EmbedBuilder()
                .setColor(color_error)
                .setTitle('Ошибка')
                .setDescription('Укажите код для выполнения.');
            return await message.reply({ embeds: [embed] });
        }

        const code = args.join(' ');
        let result;

        try {
            result = eval(code);
        } catch (error) {
            const embed = new EmbedBuilder()
                .setColor(color_error)
                .setTitle('Ошибка')
                .addFields(
                    {name: 'Код', value: `\`\`\`javascript\n${code}\n\`\`\``, inline: false},
                    {name: 'Ошибка', value: `\`\`\`javascript\n${error}\n\`\`\``, inline: false}
                );
            return await message.reply({ embeds: [embed] });
        }

        const embed = new EmbedBuilder()
            .setColor(color_main)
            .setTitle('Результат выполнения')
            .addFields(
                {name: 'Код', value: `\`\`\`javascript\n${code}\n\`\`\``, inline: false},
                {name: 'Результат', value: `\`\`\`javascript\n${result}\n\`\`\``, inline: false}
            );
        message.reply({ embeds: [embed] });
    },
};
