import { Button } from 'antd';
import { WifiOutlined } from '@ant-design/icons';


export default function WiFiButton() {

  return (
    <Button type="link" style={{ backgroundColor: 'white' }}>
      <WifiOutlined />
    </Button>
  )
}