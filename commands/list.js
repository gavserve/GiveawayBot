const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let activeGiveaways = bot.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);

    message.channel.send(`${activeGiveaways.map((g) => g.messageID.join(', '))}`);
}

module.exports.config = {
    name: "list",
    description: "Lists all the active giveaways in the server.",
    usage: "g!list",
    accessableby: "Everyone",
    aliases: []
}
