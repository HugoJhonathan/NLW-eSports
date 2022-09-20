import './styles/main.css'
import logoImg from '/Logo.svg'
import { GameBanner } from './Components/GameBanner'
import { CreateAdBanner } from './Components/CreateAdBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './Components/CreateAdModal'
import axios from 'axios'
import { Link } from 'react-router-dom'

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export default function App() {
  const [open, setOpen] = useState<boolean>(false)

  const toggleModal = () => {
    setOpen(!open)
  }

  const [games, setGames] = useState<Game[]>([])
  const [gameClicked, setGameClicked] = useState<Game>()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  useEffect(() => {
    axios("http://localhost:3333/games/")
      .then(res => {
        setGames(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [isSubmitted])

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 p-4">

      <img src={logoImg} />

      <h1 className='text-6xl text-TEXT font-black mt-20 max-'>
        Seu <span className='bg-nlwGradient bg-clip-text text-transparent duo'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        {games.map(game => {
          return (
            <Link to={`games/${game.id}/ads`}>
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
                func={() => { setGameClicked(game) }}
              />
            </Link>
          )
        })}

      </div>


      <Dialog.Root open={open} onOpenChange={setOpen}>
        <CreateAdBanner />
        <CreateAdModal
          submitted={() => { setIsSubmitted(!isSubmitted); toggleModal() }} />
      </Dialog.Root>

    </div >
  )
}