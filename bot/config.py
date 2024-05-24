TOKEN = '6641394684:AAFj-Yre0RMxpl09130FPpbww59sKpDeMxM'


global age
    while age == 0: #проверяем что возраст изменился
        try:
            age = int(message.text) #проверяем, что возраст введен корректно
        except Exception:
            bot.send_message(message.from_user.id, 'Цифрами, пожалуйста')
            keyboard = types.InlineKeyboardMarkup(); #наша клавиатура
            key_yes = types.InlineKeyboardButton(text='Да', callback_data='yes'); #кнопка «Да»
            keyboard.add(key_yes); #добавляем кнопку в клавиатуру
            key_no= types.InlineKeyboardButton(text='Нет', callback_data='no')
            keyboard.add(key_no)
            question = 'Тебе '+str(age)+' лет, тебя зовут '+name+' '+surname+'?'
            bot.send_message(message.from_user.id, text=question, reply_markup=keyboard)