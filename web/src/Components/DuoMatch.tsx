import * as Dialog from '@radix-ui/react-dialog';
import { Check, CheckCircle, CopySimple, X } from 'phosphor-react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
    visible: boolean;
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ visible = false, discord, onClose }: Props) {

    const [isCopping, setIsCopping] = useState<boolean>(false)

    function Copy() {
        setIsCopping(true)
        setTimeout(() => {
            setIsCopping(false)
        }, 1000);
    }

    return (
        <Dialog.Root open={visible} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed ' />
                <Dialog.Content className='focus:outline-none fixed max-w-full flex items-center flex-col justify-center bg-SHAPE p-5 text-TEXT top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/50'>

                    <Dialog.DialogTrigger className='self-end focus:outline-none'>
                        <X size={20} className="text-CAPTION_400 " />
                    </Dialog.DialogTrigger>

                    <CheckCircle size={70} className="text-SUCCESS" />
                    <div className="mt-5">
                        <strong className='text-2xl text-TEXT font-black block text-center'>Let's play</strong>
                        <span className='text-CAPTION_400 block text-center'>Conecte-se e comece a jogar!</span>
                    </div>

                    <div className='text-TEXT mt-5 mb-2'>
                        Adicione no Discord
                    </div>

                    <CopyToClipboard text={discord} onCopy={Copy}>
                        <div className=' bg-stone-900  gap-3 p-3 rounded flex w-[100%] h-[50px] justify-center items-center cursor-pointer'>
                            {!isCopping &&
                                <>
                                    <CopySimple size={22} className='mx-0 text-CAPTION_400' />
                                    {discord}
                                </>
                            }
                            {isCopping && <span className='text-SUCCESS flex flex-row items-center gap-2'><Check size={25} /> copiado</span>}
                        </div>
                    </CopyToClipboard>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >
    )
}