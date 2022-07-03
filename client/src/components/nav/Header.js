import React, {useState} from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => {

    const items = [
        {
          label: 'Home',
          key: 'mail',
          icon: <MailOutlined />,
        },
        {
          label: 'Navigation Two',
          key: 'app',
          icon: <AppstoreOutlined />,
          disabled: false,
        },
        {
          label: 'Navigation Three - Submenu',
          key: 'SubMenu',
          icon: <SettingOutlined />,
          children: [
            {
              type: 'group',
              label: 'Item 1',
              children: [
                {
                  label: 'Option 1',
                  key: 'setting:1',
                },
                {
                  label: 'Option 2',
                  key: 'setting:2',
                },
              ],
            },
            {
              type: 'group',
              label: 'Item 2',
              children: [
                {
                  label: 'Option 3',
                  key: 'setting:3',
                },
                {
                  label: 'Option 4',
                  key: 'setting:4',
                },
              ],
            },
          ],
        },
      ];

      const [current, setCurrent] = useState('');

      const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    
      return <Menu 
      onClick={handleClick} 
      selectedKeys={[current]} 
      mode="horizontal" 
      items={items} />;



}

export default Header;