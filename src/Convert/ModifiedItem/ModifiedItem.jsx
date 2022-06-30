import s from './ModifiedItem.module.css'
import Input from '../../Input/Input'
import Select from '../../Select/Select'
const ModifiedItem = ({
    curr,
    sumFixed,
    onTotal,
    quantity,
    currency,
  }) => {
    return (
      <div className={s.boxConverterElement}>
        <Input
          sumFixed={sumFixed}
          quantity={quantity}
        />
        <Select
          curr={curr}
          currency={currency}
          onTotal={onTotal}
        />
      </div>
    );
  };
  export default ModifiedItem