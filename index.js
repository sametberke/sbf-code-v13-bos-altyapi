const { MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu, Client } = require("discord.js")
const client = new Client({intents: [
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
    "GUILDS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_INVITES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "GUILD_PRESENCES",
    "GUILD_SCHEDULED_EVENTS",
    "GUILD_VOICE_STATES",
    "GUILD_WEBHOOKS"
]})
const { token } = require("./ayarlar.json")
require("./command/app.js")(client)




client.login(token)