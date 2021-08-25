import React from 'react';
import './index.less'
import xx from '../assets/xx.jpg';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({text,styles}: IProps) {
  return (
    <>
      <img src={xx} alt=""/>
    <div  style={styles} styleName="title">{text}</div>
    </>
  )
}

export default Title;