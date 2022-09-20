import { Game } from "../App";
import { GameBanner } from "./GameBanner";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { DuoCard, DuoCardProps } from "./DuoCard";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import logoImg from '/Logo.svg'
import { DuoMatch } from "./DuoMatch";

export function GameDuo() {

    const { id } = useParams();

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        rtl: false,
        slides: { perView: "auto", spacing: 15 },
    })

    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [game, setGame] = useState<Game>()
    const [dataLoaded, setDataLoaded] = useState<boolean>(false)

    useEffect(() => {
        axios(`http://192.168.0.105:3333/games/${id}/ads`)
            .then(res => {
                console.log(res.data)
                setDuos(res.data)
            })
            .catch(err => console.log(err))

        axios(`http://192.168.0.105:3333/games/${id}/`)
            .then(res => {
                console.log(res.data)
                setGame(res.data)
                setDataLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])


    const [discordDuoSelected, setDiscordDuoSelected] = useState<string>('')
    async function getDiscordUser(adsId: string) {
        fetch(`http://192.168.0.105:3333/ads/${adsId}/discord`)
            .then(res => res.json())
            .then(data => {
                setDiscordDuoSelected(data.discord)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {game && (

                <div className='bg-OVERLAY inset-0 fixed '>

                    <DuoMatch
                        visible={discordDuoSelected !== ''}
                        discord={discordDuoSelected}
                        onClose={() => setDiscordDuoSelected('')} />

                    <div className='flex flex-col gap-7 items-center fixed  py-8 px-10 text-TEXT top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-lg w-[1000px] max-w-[90%] '>

                        <Link to="/">
                            <img src={logoImg} className="h-20" />
                        </Link>

                        <div className="w-[200px]">
                            <GameBanner
                                key={game.id}
                                bannerUrl={game.bannerUrl}
                                title={game.title}
                                adsCount={game._count.ads}
                            />
                        </div>
                        <div>
                            <strong className='text-2xl text-TEXT font-black block '>{game.title}</strong>
                            <span className='text-CAPTION_400 block'>Conecte-se e comece a jogar!</span>
                        </div>
                        {duos.length > 0 ?
                            <div ref={sliderRef} className="keen-slider ">
                                {duos.map(el =>
                                    <DuoCard key={el.id} data={el} onConnect={() => getDiscordUser(el.id)} />
                                )}
                            </div>
                            :
                            <span className="text-ALERT">Nenhum anúncio encontrado para este Jogo! 😞</span>
                        }

                    </div>
                </div >

            )}
        </>
    )

}