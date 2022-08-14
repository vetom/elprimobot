import { Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

const { APP_ID: clientId, GUILD_ID: guildId, DISCORD_TOKEN: token } = config;

const commands = [
  {
    name: 'dude',
    description: 'de lo mio!',
  },
];

console.log(token);
const rest = new REST({ version: '10' }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
