//from App

// Globals
import React, { Component } from 'react';

// Components
import CardRow from '../ecosystems/CardRow';

// Styles
import styles from './styles/Takeahike.scss';

// Assets
import coffeecup from '../../assets/images/coffeecup.svg';
import leftfoot from '../../assets/images/shelffoot.svg';
import rightfoot from '../../assets/images/shelffoot.svg';
import plant from '../../assets/images/plant.svg';
import coffeepainting from '../../assets/images/coffeepainting.svg';
import treepainting from '../../assets/images/treepainting.svg';
import painting1 from '../../assets/images/painting1.svg';

export default class Takeahike extends Component {
  render() {
    return (
      <div className={`${styles.wrapper}`}>
          <div className={`${styles.Takeahike}`}>
            <div className={`${styles.flexLeft}`}></div>
            <div className={`${styles.flexMiddle}`}>
                <img src={coffeecup} className={`${styles.coffeecup}`}/>
                <img src={leftfoot} className={`${styles.leftfoot}`}/>
                <img src={rightfoot} className={`${styles.rightfoot}`}/>
                <img src={plant} className={`${styles.plant}`}/>
                <img src={coffeepainting} className={`${styles.coffeepainting}`}/>
                <img src={treepainting} className={`${styles.treepainting}`}/>
                <img src={painting1} className={`${styles.painting1}`}/>
                <div className={`${styles.outercabinet}`}>
                    <div className={`${styles.innercabinet}`}>
                        <CardRow type="router"/>
                        <CardRow type="taskrunner" />
                        <CardRow type="frontend"/>
                        <CardRow type="auth"/>
                    </div>
                </div>
                <div className={`${styles.bottomtray}`}></div>
            </div>
            <div className={`${styles.flexRight}`}></div>
          </div>
          <div className={`${styles.floor}`}></div>
      </div>
    );
  }
}