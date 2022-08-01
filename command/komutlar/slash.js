//Slash Komutlar
const { Permissions } = require("discord.js") //permission kontrol etmek için


module.exports = {
    slash: true, //Kodun slash olduğunu belirttik
    name: ["ban"],//Sadece 1 tane girebilirsiniz.Prefixli komutlara benzemez!
    description: "Ban Komutu",//komut açıklamasını girin bu gözükecek
    option: [ //optionları arrayla açtıktan sonra bi tanede süslü parantez atıyoruz.
        {
            name: "üye",//kim banlanacak
            description: "Hangi üyeyi banlamak istersiniz?",//optionun açıklaması
            type: "USER",//büyük harflerle option typeını giriyoruz.Bu type bize bir user yani üye seçileceğini gösteriyor
            require: true, //Zorunlu mu isteğe bağlı mı ben birini banlayacağı için true dedim.
        },//buraya virgül koyup bi tane daha süslü parantez açıyoruz
        {
            name: "neden",//bananınca bir nedeni olmalı
            description: "Neden girebilirsiniz",//açıklaması
            type: "STRING", //burada yazı sayı girilebilmesi için STRING yazılmalı
            require: false, //burası isteğe bağlı olarak ayarladım.
        } 
    ], //option ekledikten sonra arrayın bitişine , bırakınız
    async execute (client, interaction) { //burada client ve interactionı çektik
//komutumuzu yazalım
const banlanacak = interaction.options.getUser("üye") //üye optionundan user ı banlanacak olarak çektik
const reason = interaction.options.getString("neden")//neden optionundan stringi reason olarak çektik
//şimdide banlayanın yetkisi varmı acaba diyelim
if(!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.reply({content: "Bunun için iznin yok", ephemeral: true})
else { //eğer varsa
banlanacak.ban({reason: reason}) //burada banlanacakı banladık nedeninide varsa girdik
}
    }
}
