import setTitle from './setTitle'
import ChatWS from '@/components/ChatWS/ChatWS'
import ServerApi from './Classes/ServerApi'

setTitle('Chat')
new ChatWS('body', ServerApi)
