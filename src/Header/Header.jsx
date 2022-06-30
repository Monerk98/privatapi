import React, { Component } from 'react'
import s from './Header.module.css'
import {ReactComponent as Red} from '../img/down.svg'
import {ReactComponent as Green} from '../img/up.svg'

export default class Header extends Component {
  render() {
      const {sum} = this.props
    return (
          <header>
            <ul className={s.wrapper}>
          {
          sum.map(res => (
            <li className={s.list} key={res.ccy}>
              <p className={s.ccy}>{res.ccy}</p>
                <div className={s.both}>
                <div className={s.green}><Green width={20} height={20}/></div>
              <p>{Math.round(res.buy * 100) /100}</p>
                </div>
                <div className={s.both}>
                <div className={s.red}><Red width={20} height={20}/></div>
              <p>{Math.round(res.sale * 100) /100}</p>
                </div>
            </li>
          ))
        }
        </ul>
          </header>
    )
  }
}
