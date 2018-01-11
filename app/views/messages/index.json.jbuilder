json.messages @new_messages.each do |message|
  json.user_name message.user.name
  json.date      message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
  json.content   message.content
  json.image     message.image_url(:thumb)
  json.id        message.id
end
