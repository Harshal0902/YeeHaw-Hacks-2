import { useTypedMessage } from '../hooks/useTypedMessage';
import styles from './styles.module.css';

export const BattleAnnouncer = ({ message }) => {
  const typedMessage = useTypedMessage(message);

  return (
    <div className={styles.main}>
      <div className={styles.message}>{typedMessage}</div>
    </div>
  );
};
