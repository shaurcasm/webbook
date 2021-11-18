import { Collapse, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { Search } = Input;

export default function SearchInput() {

  return (
      <Search placeholder="Search" onSearch={console.log} enterButton />
  )
}