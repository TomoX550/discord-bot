const Discord = require('discord.js');

const Client = new Discord.Client;

const prefix = "m!";

Client.on("ready", () => {
   console.log("bot on");
});

Client.on('guildMemberAdd', member => {
    console.log('Un nouveau membre est arrivé');
    member.guild.channels.cache.get("805857076697104435").send('Un nouveau membre est arrivé !\nBienvenue **' + member.displayName + "** :D")
});

Client.on('guildMemberRemove', member => {
    console.log('Un membre est parti :(');
    member.guild.channels.cache.get("805857076697104435").send('Un membre est parti,\nAu revoir **' + member.displayName + "** :c")
});


Client.on("message", message => {
    if(message.author.bot) return
    if(message.channel.type === "dm")return

//bonjour
    if(message.content == prefix + "bonjour"){
    message.channel.send("**" + message.author.username + "**" + " qui a pour id " + "__" + message.author.id + "__" + ", salutt!");
}
//TomoX
    if(message.content == prefix + "TomoX"){
    message.channel.send('TomoX est trop beau wlh');
}
//ping
    if(message.content == prefix + "ping"){
    const ping = new Discord.MessageEmbed()
             .setTitle(`**Ping** ${Date.now() - message.createdTimestamp}ms.`)  
             .setColor('#010101')
   message.channel.send(ping)
}
//twitchprime
    if(message.content == prefix + "twitchprime"){
    message.channel.send('SUB WITH TWITCH PRIME\nhttps://gaming.amazon.com/prime')
}
    //FORTNITEE
    if(message.content == prefix + "fortnite"){
        message.channel.send('https://arspoofing.com/assets/front/images/news/niantic-swings-ban-hammer-over-500k-accounts.png');
};

});
































Client.login(process.env.TOKEN);
