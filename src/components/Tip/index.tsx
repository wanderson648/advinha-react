import styles from './styles.module.css'
import tipIcon from '../../assets/tip.svg'

type Props = {
    tip: string
}

export function Tip({ tip }: Props) {
    return (
        <div className={styles.tip}>
            <img src={tipIcon} alt="Ícone e dica" />

            <div>
                <h3>Dicas</h3>
                <p>{tip}</p>
            </div>
        </div>
    )
}