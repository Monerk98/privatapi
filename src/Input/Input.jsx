import s from './Input.module.css'
const Input = ({ type,quantity, sumFixed }) => {
    return (
      <input
        type='number'
        value={quantity}
        onChange={e => sumFixed(e.target.value)}
        className={s.input}
        
      />
    );
  };
  export default Input