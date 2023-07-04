// 模块化引入
import styles from "./comp1.module.scss";
import { Button } from 'antd';
import {VerticalAlignBottomOutlined} from '@ant-design/icons';
function Copm1 () {
  return (
    <div className={styles.box}>
      <Button type="primary">
      Primary
    </Button>
    <VerticalAlignBottomOutlined style={{fontSize:"40px"}}/>
    </div>
  )
}

export default Copm1;