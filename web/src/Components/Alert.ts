import Swal from 'sweetalert2'
import { THEME } from '../assets/theme'
import { SweetAlertIcon } from 'sweetalert2'

const iconColor = {
    success: THEME.COLORS.SUCCESS,
    error: THEME.COLORS.ALERT,
    warning: 'yellow',
    info: 'blue',
    question: 'black',
}

export function Alert(icon: SweetAlertIcon, title: string, text: string) {
    return Swal.fire({
        icon: icon,
        title,
        text,
        iconColor: iconColor[icon],
        background: THEME.COLORS.SHAPE,
        color: THEME.COLORS.CAPTION_300,
        confirmButtonColor: THEME.COLORS.PRIMARY,
    })
}