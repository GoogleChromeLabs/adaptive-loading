
// ray test touch <
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Form, Icon, Image, Input, Menu } from 'semantic-ui-react';
import logo from '../../assets/images/logo.jpg';
import './HeaderNav.scss';

export class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onSubmit = () => {
    const escapedSearchQuery = encodeURI(this.state.query);
    this.props.history.push(`/results?search_query=${escapedSearchQuery}`);
  };

  render() {
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
            <Form onSubmit={this.onSubmit}>
              {/* 4 */}
              <Form.Field>
                <Input
                  placeholder='Search'
                  size='small'
                  action='Go'
                  value={this.state.query}
                  onChange={this.onInputChange} />
              </Form.Field>
            </Form>
          </Menu.Item>
          {/* 5 */}
          <Menu.Menu position='right'>
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
  }
}

export default withRouter(HeaderNav);
// ray test touch >
