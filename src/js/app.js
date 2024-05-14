import setTitle from './setTitle'
import Chat from '@/components/Chat/Chat'
import ServerApi from './Classes/ServerApi'

setTitle('Chat')
new Chat('body', ServerApi)
