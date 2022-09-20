import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';
import { useState } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { Game } from '../../App';

interface Props {
    data: Game[];
    register: UseFormRegister<FieldValues>;
    errors: FieldErrorsImpl;
    onValueChange: (e: string) => void;
}

export function SelectRadix({ data, register, errors, onValueChange }: Props) {

    const [gameSelected, setGameSelected] = useState<string>();

    return (
        <>
            <Select.Root
                onValueChange={(e) => { onValueChange(e); setGameSelected(e) }}
                {...register("game", { required: true })}
            >
                <Select.Trigger
                    id="game"
                    className="bg-BACKGROUND_900 py-3 px-4 rounded items-center text-sm flex justify-between"
                >
                    <Select.SelectValue placeholder="Selecione o jogo que deseja" />
                    {!gameSelected ?
                        <CaretDown size={20} className="text-CAPTION_400" /> :
                        <Check size={20} className="text-SUCCESS" />}
                </Select.Trigger>

                <Select.Portal>
                    <Select.Content className="bg-BACKGROUND_900 rounded-lg text-sm shadow-xl">
                        <Select.ScrollUpButton />
                        <Select.Viewport>
                            <Select.Group>
                                {data.map(game => {
                                    return (
                                        <Select.Item
                                            value={game.id}
                                            key={game.id}
                                            className="flex items-center justify-between py-2 px-3 m-1 bg-BACKGROUND_900 text-CAPTION_500 cursor-pointer rounded hover:bg-BACKGROUND_800 hover:text-TEXT">
                                            <Select.ItemText>{game.title}</Select.ItemText>
                                            <Select.ItemIndicator >
                                                <Check size={20} className="text-SUCCESS" />
                                            </Select.ItemIndicator>
                                        </Select.Item>
                                    )
                                })}
                            </Select.Group>
                            <Select.Separator />
                        </Select.Viewport>
                        <Select.ScrollDownButton />
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
            {errors.game && <span className="valida-erro">Game precisa ser preenchido</span>}
        </>
    )
}