import { NavLink } from 'react-router-dom'
import styles from './JoinButton.module.scss'

type JoinButtonProps = {
	buttonText: string
}

const JoinButton: React.FC<JoinButtonProps> = ({ buttonText }) => {
	return (
		<NavLink to='/join' className={styles.joinButton}>
			{buttonText}
		</NavLink>
	)
}

export default JoinButton
