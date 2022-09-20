interface Props {
    label: string;
    value: string;
    colorValue?: string;
}
export function DuoInfo({ label, value, colorValue }: Props) {
    return (
        <div className="mb-4">
            <span className="text-CAPTION_300 block">{label}</span>
            <span className={`block font-semibold ${colorValue}`}>{value}</span>
        </div>
    )
}