import { DiscordLogo } from "phosphor-react";
import { DuoInfo } from "./DuoInfo";

export interface DuoCardProps {
    id: string;
    hourEnd: string;
    hourStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {

    return (
        <div
            className="w-[200px]  flex flex-col keen-slider__slide rounded-lg bg-SHAPE p-5"
            style={{ maxWidth: 200, minWidth: 200 }}
        >

            <DuoInfo label="Nome" value={data.name} />
            <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
            <DuoInfo label="Disponibilidade" value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`} />
            <DuoInfo label="Chamada de áudio?"
                value={data.useVoiceChannel ? "Sim" : "Não"}
                colorValue={data.useVoiceChannel ? "text-SUCCESS" : "text-ALERT"} />

            <div className="flex flex-1 flex-col items-center justify-end">
                <button onClick={onConnect} className={`bg-PRIMARY flex w-[100%]  justify-center items-center h-9 rounded-md`}>
                    <DiscordLogo weight="fill" size={24} />
                    <span className="ml-2 font-semibold">
                        Conectar
                    </span>
                </button>
            </div>
        </div>
    )
}