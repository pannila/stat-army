const Discord = require("discord.js") //Define Discord.
const moment = require("moment"); //Define moment.
const client = new Discord.Client(); //The bot itself.

let options = {
    total: '521397762164654101',
    users: '521397762877816854',
    bots: '521397763813146644'
}; //Options for bot to work
// bot need permissions to work btw.
client.on("ready", () => {

    if (client.guilds.size < 1) {
        console.err("The bot is not in any guild.")
        process.exit(0);
        return;
    } //Shutdowns, if bot is not in any guild
    const text = `
______________________________
Ready since: ${moment(Date.now()).format('dddd, MMMM do YYYY, HH:mm:ss')}
Server: ${client.guilds.first().name}
Total server members: ${client.guilds.first().memberCount}
Credits: https://github.com/dpprdev/statsbot/
______________________________
` //The text that displays to console, when client is ready.
    console.log(text)
})
client.on('guildMemberAdd', member => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
        try {
            member.guild.channels.get(options.total).setName(`Total Members: ${member.guild.memberCount}`) // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
            member.guild.channels.get(options.users).setName(`Users: ${member.guild.members.filter(m => !m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
            member.guild.channels.get(options.bots).setName(`Bots: ${member.guild.members.filter(m => m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
        
        }
        catch (e) {
        console.log(e)
        }
  })
client.on('guildMemberRemove', member => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
        try {
            member.guild.channels.get(options.total).setName(`Total Members: ${member.guild.memberCount}`) // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
            member.guild.channels.get(options.users).setName(`Users: ${member.guild.members.filter(m => !m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
            member.guild.channels.get(options.bots).setName(`Bots: ${member.members.filter(m => m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
        
        }
        catch (e) {
        console.log(e)
        }
})
client.login(process.env.BOT_TOKEN);
