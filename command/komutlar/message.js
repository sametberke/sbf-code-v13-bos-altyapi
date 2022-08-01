//Prefixli Komutlar Böyle Olmalıdır //SBF CODE


module.exports = {
    slash: false,//Slash olmadığını belirttik
    name: ["ping", "pong"],//Aliases gibi ama daha kolay arrayın içerisine istediğin kadar yaz
    description: "Ping Komutu",//Bunu prefixli komutlarda boşverebilirsiniz ama slashda boşvermeyin.


    async execute (client, messsage, args) { //Burada client , message ve args ı tanımladık
        //komutunuz ping komutu olduğu için ben ping yapacağım
        message.reply(`Pingim **${client.ws.ping}**`)
    }
}
