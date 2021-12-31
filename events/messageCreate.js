const { analyzeText } = require("findahaiku");
const { MessageEmbed } = require("discord.js");

const generateHaikuEmbed = (message, analysis) =>
  new MessageEmbed()
    .setColor("#ffd1dc")
    .setTitle("")
    .setURL("")
    .setAuthor(message.member.displayName, message.author.avatarURL())
    .setDescription("***" + analysis.formattedHaiku + "***")
    .setThumbnail("")
    .setImage("")
    .setTimestamp()
    .setFooter("");

const identifyHaiku = (message) => {
  if (!message.author.bot) {
    const text = message.content.replace(/(\r\n|\n|\r)/gm, " ");
    const analysis = analyzeText(text);

    if (analysis.formattedHaiku) {
      message.reply({
        embeds: [generateHaikuEmbed(message, analysis)],
      });
      console.log(message.author.username);
      //message.channel.textchannel.guild.channels.("889594409748955166").send(analysis.formattedHaiku);
      message.guild.channels
        .fetch("889612362783535125")
        .then((channel) =>
          channel.send({ embeds: [generateHaikuEmbed(message, analysis)] })
        )
        .catch(console.error);
    }
  }
};
const oldHaikus = [
  861741711843786773, 862778244721541121, 875063952546086963,
  875511381435228160, 875829091473948712, 883048467197464657,
  884850554633859152, 885647066653655071, 887122969971785778,
  887365089534025828, 887868793160867920, 888470005430255626,
];

// console.log(
//   Promise.all([(395898697365323776).message.fetch(Snowflake[oldHaikus])])
// );

//oldHaikus.forEach((Element) => console.log(Element / 5));

// message.channel.messages
//   .fetch("861741711843786773")
//   .then((message) => console.log(message.content))
//   .catch(console.error);

///////////////TWITTER LINK FIX HERE
// const fixTwitterVideoEmbed = (message) => {
//   const twitLink = "https://twitter.com";

//   const messageIncludesTwitterLink = message.content.includes(twitLink);
//   const proxyURL = message.embeds[0]?.thumbnail?.url;
//   const imageProxyUrlHasVideoThumbnail = proxyURL
//     ? proxyURL.includes("video_thumb")
//     : false;

//   const shouldActivate =
//     !message.author.bot &&
//     messageIncludesTwitterLink &&
//     proxyURL &&
//     imageProxyUrlHasVideoThumbnail;
//   //console.log(message.embeds);

//   if (shouldActivate) {
//     //console.log(message);
//     //console.log(message.author.bot, "isbot");
//     message.channel.send(
//       "**" +
//         message.member.displayName +
//         "** _ " +
//         message.embeds[0].url.replace("twitter.com", "fxtwitter.com")
//     );
//     message.suppressEmbeds();
//   }
// };

module.exports = {
  name: "messageCreate",
  execute(message) {
    identifyHaiku(message);
    //fixTwitterVideoEmbed(message);
  },
};
