import styles from '@/styles/StopLight.module.css'
import dynamic from 'next/dynamic'

export default function StopLight({ color }) {
    return (
        <div className={styles.stopLight}>
            <Circle color="red" isFilled={color === 'red'} />
            <Circle color="yellow" isFilled={color === 'yellow'}/>
            <Circle color="green" isFilled={color === 'green'}/>
        </div>
    )
}

function Circle({ color, isFilled }) {

    const dynamicStyles = {
        border: `1px solid ${color}`,
        background: isFilled ? color : 'transparent'
    }

    return (
        <div className={styles.circle} style={dynamicStyles}></div>
    )
}