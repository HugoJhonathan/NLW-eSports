interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
    func?: () => void;
}

export function GameBanner(props: GameBannerProps,) {
    return (
        <div className="relative rounded-lg overflow-hidden" onClick={props.func}>
            <img src={props.bannerUrl} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0'>
                <strong className='font-bold text-TEXT block'>{props.title}</strong>
                <span className='text-TEXT text-sm mt-1 block'>{props.adsCount} anúncio(s)</span>
            </div>
        </div>
    )
}