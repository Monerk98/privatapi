import React, { useEffect, useState } from 'react';
import ModifiedItem from './ModifiedItem/ModifiedItem';
import s from './Convers.module.css'
import fetchAPI from '../services/Api';
import { similar } from '../support/Support';
import {ReactComponent as Icon} from '../img/dollar.svg'


function Check(CurrencyGet, CurrencySum,Total) {
  const result = (Number(CurrencySum) / Number(CurrencyGet)) * Number(Total);
  return Math.round(result * 100) / 100;
}

const Converter = () => {
  const [quantityFirst, setQuantityOne] = useState(0);
  const [quantityTwo, setQuantityTwo] = useState(0);
  const [valueOne, setCurrency1] = useState('USD');
  const [valueTwo, setCurrency2] = useState('UAH');
  const [curr, setCurrencies] = useState([]);
  const [change, setChange] = useState([]);

  useEffect(() => {
    fetchAPI().then(data => {

      let decrementItem  = data.reduce((arr, item) => {
        if(item.ccy !== "BTC"){
          arr.push(item.ccy)
        }
        return arr
      },[])
      // console.log(decrementItem);
      decrementItem  = ['UAH', ...decrementItem ];

      setCurrencies(decrementItem );

      let exhcange = data.reduce((arr, item) => {
        arr = { ...arr, [item.ccy]: { sale: item.sale, buy: item.buy } };

        return arr;
      }, {});

      const UAH = { UAH: { sale: 1, buy: 1 } };

      exhcange = { ...exhcange, ...UAH };

      setChange(exhcange);

    });
  }, []);

  const sumFixedFirst = amount1 => {
    if (similar(valueOne, valueTwo)) {
      const value = Check(
        change[valueTwo].sale,
        change[valueOne].buy,
        amount1,
      );

      setQuantityTwo(value);
      setQuantityOne(amount1);
    }
  };

  const sumFixedSecond = amount2 => {
    if (similar(valueOne, valueTwo)) {
      const value = Check(
        change[valueOne].sale,
        change[valueTwo].buy,
        amount2,
      );
      setQuantityOne(value);

      setQuantityTwo(amount2);
    }
  };

  const TotalCurr1 = currency1 => {
    if (similar(currency1, valueTwo)) {
      const value = Check(
        change[valueTwo].sale,
        change[currency1].buy,
        quantityFirst,
      );

      setQuantityTwo(value);
      setCurrency1(currency1);
    }
  };

  const TotalCurr2 = currency2 => {
    if (similar(valueOne, currency2)) {
      const value = Check(
        change[valueOne].sale,
        change[currency2].buy,
        quantityTwo,
      );
      setQuantityOne(value);
      setCurrency2(currency2);
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Currency Converter</h2>
      <div className={s.wrapperInput}>
        {curr && (
          <>
            <ModifiedItem
              curr={curr}
              sumFixed={sumFixedFirst}
              onTotal={TotalCurr1}
              quantity={quantityFirst}
              currency={valueOne}
            />
            <div className={s.img}><Icon  width={40} height={40}/></div>
            <ModifiedItem
              curr={curr}
              sumFixed={sumFixedSecond}
              onTotal={TotalCurr2}
              quantity={quantityTwo}
              currency={valueTwo}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Converter;
