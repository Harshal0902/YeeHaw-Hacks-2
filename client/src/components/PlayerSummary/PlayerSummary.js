import { Bar } from 'components';

export const PlayerSummary = ({
  main,
  name,
  level,
  health,
  maxHealth,
}) => (
  <div
    className="h-40 text-white p-6 box-border flex flex-col justify-between"
    style={{ backgroundColor: main ? '#821400' : '#1953cb' }}
  >
    <div className="flex justify-between">
      <div className="text-3xl">{name}</div>
      <div className="text-3xl">Lvl {level}</div>
    </div>

    <div className="text-3xl">
      <Bar label="HP" value={health} maxValue={maxHealth} />
    </div>
  </div>
);
