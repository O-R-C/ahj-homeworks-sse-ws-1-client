import setTitle from './setTitle'
import Chat from '@/components/Chat/Chat'

setTitle('Chat')
new Chat('body')

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/index')
  const data = await response.json()
  console.log('🚀 ~ data:', data)
  return data
}

console.log(fetchData())
