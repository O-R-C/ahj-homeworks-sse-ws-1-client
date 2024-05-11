import setTitle from './setTitle'

setTitle('Chat')

import RegisterForm from '@/components/ui/RegisterForm/RegisterForm'
document.body.append(RegisterForm())

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/index')
  const data = await response.json()
  return data
}

console.log(fetchData())
