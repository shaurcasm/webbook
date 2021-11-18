import { Space } from 'antd';
import AddContact from '../../../../components/AddContact';
import SearchInput from '../../../../components/SearchInput';
import WiFiButton from '../../../../components/WiFiButton';

export default function Home() {

  return (
    <header className='home-header'>
      <h1>DOZ Pharmacy - Contacts</h1>
      <div className='utility' style={{ display: 'flex' }}>
        <Space>
          <AddContact />
          <WiFiButton />
          <SearchInput />
        </Space>
      </div>
    </header>
  )
}