
import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Icon, Image, Input, Menu } from 'semantic-ui-react';

import CheckboxWithLabel from '../../components/LiteModeDebugging/CheckboxWithLabel/CheckboxWithLabel';
import ToggleWithLabel from '../../components/LiteModeDebugging/ToggleWithLabel/ToggleWithLabel';
import { EmulationContext } from '../../contexts';
import logo from '../../assets/images/logo.jpg';
import './HeaderNav.scss';

export const HeaderNav = ({ history }) => {
  const [query, setQuery] = useState('');
  const {
    manualEnabled,
    isLiteModeOn,
    toggleLiteModeHandler,
    enableManualTestingHandler
  } = useContext(EmulationContext);

  const onInputChange = event => {
    setQuery(event.target.value);
  };

  const onSubmit = () => {
    const escapedSearchQuery = encodeURI(query);
    history.push(`/results?search_query=${escapedSearchQuery}`);
  };

  return (
    // 1
    <Menu borderless className='top-menu' fixed='top'>
      {/* 2 */}
      <Menu.Item header className='logo'>
        <Link to='/'><Image src={logo} size='tiny'/></Link>
      </Menu.Item>
      {/* 3 */}
      <Menu.Menu className='nav-container'>
        <Menu.Item className='search-input'>
          <Form onSubmit={onSubmit}>
            {/* 4 */}
            <Form.Field>
              <Input
                placeholder='Search'
                size='small'
                action='Go'
                value={query}
                onChange={onInputChange} />
            </Form.Field>
          </Form>
        </Menu.Item>
        {/* 5 */}
        <Menu.Menu position='right'>
          <ToggleWithLabel 
            label='Poor Network/CPU count/Memory On/Off'
            disabled={!manualEnabled}
            checked={isLiteModeOn}
            onChange={toggleLiteModeHandler} />
          <CheckboxWithLabel
            label='Enable Manual Testing'
            checked={manualEnabled}
            onChange={enableManualTestingHandler} />
          <Menu.Item>
            {/* 6 */}
            <Icon className='header-icon' name='video camera' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='grid layout' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='chat' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='alarm' size='large' />
          </Menu.Item>
          {/* 7*/}
          <Menu.Item name='avatar'>
            <Image src='http://via.placeholder.com/80x80' avatar />
          </Menu.Item>
        </Menu.Menu>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(HeaderNav);
