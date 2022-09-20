import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Game } from "../App";
import { Alert } from "./Alert";
import { Input2 } from "./Form/Input2";
import { Loading } from "./Loading";
import { SelectRadix } from "./Form/SelectRadix";

interface Form {
    submitted: () => void;
}

export function CreateAdModal(form: Form) {

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({});
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    useEffect(() => {
        axios("http://localhost:3333/games/")
            .then(res => {
                setGames(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    async function handleCreateAd(data: any) {
        let obj = {
            name: data.name,
            yearsPlaying: Number(data.yearsPlaying),
            discord: data.discord,
            weekDays: weekDays.map(Number),
            hourStart: data.hourStart,
            hourEnd: data.hourEnd,
            useVoiceChannel,
        }
        try {
            setLoading(true)
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, obj)
                .then(() => {
                    setTimeout(() => {
                        setSuccess(true)
                        setLoading(false)
                        Alert('success', 'Muito bem!', 'Anúncio criado com sucesso!')
                        reset()
                    }, 1000);

                })
        } catch (err: any) {
            setLoading(false)
            Alert('error', 'Erro', err.message)
        }
        finally {
            setWeekDays([])
            setUseVoiceChannel(false)
            form.submitted()
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-OVERLAY inset-0 fixed z-2'>
                <Dialog.Content className='focus:outline-none fixed max-w-full bg-SHAPE py-8 px-10 text-TEXT top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/50'>

                    <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

                    <form onSubmit={handleSubmit(handleCreateAd)} className='mt-8 flex flex-col gap-4'>

                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold" htmlFor='game'>Qual o game?</label>
                            <SelectRadix
                                data={games}
                                errors={errors}
                                register={register}
                                onValueChange={e => setValue('game', e)}
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor='name'>Seu nome (ou nickname)</label>
                            <Input2 errors={errors} options={{ required: true }} register={register} id='name' type="text" placeholder='Como te chamam dentro do game?' name="name" />
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                                <Input2 errors={errors} options={{ required: true }} register={register} id='yearsPlaying' name="yearsPlaying" type="number" placeholder=' Tudo bem ser ZERO :]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='discord'>Qual seu Discord?</label>
                                <Input2 errors={errors} options={{ required: true }} register={register} id='discord' name='discord' type="text" placeholder='Usuario#0000' />
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            <div className='flex flex-col items-center gap-2'>
                                <label htmlFor='weekDays'>Quando costuma jogar?</label>
                                <ToggleGroup.Root
                                    type="multiple"
                                    className='grid grid-cols-4 gap-2'
                                    value={weekDays}
                                    onValueChange={(e) => { setValue('weekDays', e); setWeekDays(e) }}
                                    {...register("weekDays", { required: false })}
                                >
                                    <ToggleGroup.Item value="0" className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-PRIMARY' : 'bg-BACKGROUND_800'}`} title="Domingo">D</ToggleGroup.Item>
                                    <ToggleGroup.Item value="1" className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-PRIMARY' : 'bg-BACKGROUND_800'}`} title="Segunda">S</ToggleGroup.Item>
                                    <ToggleGroup.Item value="2" className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-PRIMARY' : 'bg-BACKGROUND_800'}`} title="Terça">T</ToggleGroup.Item>
                                    <ToggleGroup.Item value="3" className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-PRIMARY' : 'bg-BACKGROUND_800'}`} title="Quarta">Q</ToggleGroup.Item>
                                    <ToggleGroup.Item value="4" className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-PRIMARY' : 'bg-BACKGROUND_800'}`} title="Quinta">Q</ToggleGroup.Item>
                                    <ToggleGroup.Item value="5" className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-PRIMARY' : 'bg-BACKGROUND_800'}`} title="Sexta">S</ToggleGroup.Item>
                                    <ToggleGroup.Item value="6" className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-PRIMARY' : 'bg-BACKGROUND_800'}`} title="Sábado">S</ToggleGroup.Item>
                                </ToggleGroup.Root>
                                {errors.weekDays && <span className="valida-erro">This field is required</span>}
                            </div>

                            <div className='flex flex-col gap-2 flex-1'>
                                <label htmlFor='hourStart'>Qual horário do dia?</label>
                                <div className='grid grid-cols-2 gap-2'>
                                    <Input2 errors={errors} options={{ required: true }} register={register} id="hourStart" name="hourStart" type="time" placeholder='De' />
                                    <Input2 errors={errors} options={{ required: true }} register={register} id="hourEnd" name="hourEnd" type="time" placeholder='Até' />
                                </div>
                            </div>

                        </div>

                        <label className='mt-2 flex gap-2 text-sm items-center self-start p-2 cursor-pointer'>
                            <Checkbox.Root
                                className="w-6 h-6 rounded bg-BACKGROUND_900 p-1"
                                checked={useVoiceChannel}
                                {...register("useVoiceChannel", { required: true })}
                                onCheckedChange={(e: boolean) => { setValue('useVoiceChannel', e); setUseVoiceChannel(e) }}

                            >
                                <Checkbox.Indicator>
                                    <Check className="w-4 h-4 text-SUCCESS" />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            Costumo me conectar ao chat de voz
                        </label>

                        <footer className='mt-4 flex justify-end gap-4'>
                            <Dialog.Close className='bg-CAPTION_500 hover:bg-CAPTION_500 px-5 h-12 rounded-md font-semibold'>Cancelar</Dialog.Close>

                            <button
                                className='bg-PRIMARY hover:bg-PRIMARY_HOVER w-[200px] px-5 h-12 rounded-md font-semibold flex items-center justify-center gap-3'
                                type="submit"
                            >
                                {loading ?
                                    <Loading />
                                    : <>
                                        <GameController size={24} />
                                        Encontrar duo
                                    </>
                                }
                            </button>
                        </footer>
                    </form>

                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal >
    )
}