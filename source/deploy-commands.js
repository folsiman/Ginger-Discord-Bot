const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

const commands = [];

const foldersPath = path.join(__dirname, 'commands-slash');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		}
		else {
			console.log(`В команде ${filePath} отсутствует обязательное свойство «data» или «execute».`);
		}
	}
}

const rest = new REST().setToken(process.env.token);

(async () => {
	try {
		console.log(`Начато обновление ${commands.length} slash команд приложения.`);

		const data = await rest.put(
			Routes.applicationCommands(process.env.clientId),
			{ body: commands },
		);

		console.log(`${data.length} slash команд приложения успешно перезагружены.`);
	}
	catch (error) {
		console.error(error);
	}
})();