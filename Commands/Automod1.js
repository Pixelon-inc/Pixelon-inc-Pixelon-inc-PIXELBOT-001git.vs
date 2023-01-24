client.on('message', message => {   

  if (message.content.includes('Sexo')) {     
    message.delete();     
  message.reply('Mantenha o respeito, evite palavrões neste servidor! 🤡');   
    } 
 });
