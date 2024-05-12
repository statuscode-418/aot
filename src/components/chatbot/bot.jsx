import React,{useEffect} from 'react'

const bot = () =>{
useEffect(()=>{
  const script = document.createElement('script')
  script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js"
  script.async = true
  document.body.appendChild(script)

  script.onload = () =>{
    window.botpressWebChat.init({
      botId: '71903695-04a5-4799-979e-b6f533046ce3',
      hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
      messagingUrl: 'https://messaging.botpress.cloud',
      clientId: '71903695-04a5-4799-979e-b6f533046ce3'
    })
  }
},[])
  return (
    <div id="webChat" />
  )
}

export default bot
