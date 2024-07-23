import './App.css'
import BottomMenu from './Components/BottomMenu'
import Hero from './Components/Hero'
import InviteButton from './Components/InviteButton'

function App() {
  

  return (
    <div className='flex h-full w-full justify-center'>
      <div className='h-full w-96 bg-black flex flex-col justify-center text-white'>
            <Hero/>
             <InviteButton imageSrc="./logo/telegram.svg" />
             <InviteButton imageSrc="./logo/whatsapp.svg" />
             <InviteButton imageSrc="./logo/linkedin.svg" /> 
            <BottomMenu />
            <InviteButton imageSrc="./logo/youtube.svg" />
      </div>
    </div>
    
  )
}

export default App
