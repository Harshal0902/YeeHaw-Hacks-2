export const BattleMenu = ({ onAttack, onMagic, onHeal }) => (
  <div className="box-border h-full grid">
    <div onClick={onAttack} className="col-start-1 col-end-3">
      Attack
    </div>
    <div onClick={onMagic} className="flex rounded bg-orange-900 items-center justify-center text-white text-2xl cursor-pointer">
      Magic
    </div>
    <div onClick={onHeal} className="flex rounded bg-orange-900 items-center justify-center text-white text-2xl cursor-pointer">
      Heal
    </div>
  </div>
);
