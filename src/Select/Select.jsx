import s from './Select.module.css'

const Select = ({ curr, currency, onTotal }) => {
    return (
      <select
        value={currency}
        onChange={e => onTotal(e.target.value)}
        className={s.select}
      >
        {curr.map(currency => (
          <option className={s.opt} value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    );
  };
  export default Select