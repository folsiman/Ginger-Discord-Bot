const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Готово! Выполнен вход как ${client.user.tag}`);
	},
};