import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlwGradient mt-8 self-stretch rounded-b-xl rounded-t-lg'>
            <div className='bg-SHAPE px-8 py-6 self-stretch mt-0 rounded-b-lg flex flex-row justify-between items-center'>
                <div className=''>
                    <strong className='text-2xl text-TEXT font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-CAPTION_400 block'>Publique um anúncio para encontrar novos players!</span>
                </div>
                <Dialog.Trigger className='bg-PRIMARY py-3 px-4 text-TEXT rounded hover:bg-PRIMARY_HOVER font-medium flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}