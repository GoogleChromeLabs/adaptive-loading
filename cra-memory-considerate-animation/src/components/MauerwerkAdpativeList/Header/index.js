
import React, { Fragment } from 'react';
import {
  Button,
  Icon,
  Input,
  Dropdown,
  Menu,
  Typography,
  Row,
  Col,
  Checkbox
} from 'antd';

import { useMemoryStatus } from '../../../utils/hooks';
import './header.css';
import SwitchWithLabel from '../../SwitchWithLabel';

const MemoryStatus = () => {
  const memoryStatus = useMemoryStatus();
  if (!memoryStatus) return <Fragment>Loading...</Fragment>;

  const {
    totalJSHeapSize,
    usedJSHeapSize,
    jsHeapSizeLimit,
    deviceMemory,
    overLoaded,
    unsupportMessage
  } = memoryStatus;
  console.log('[Header] memoryStatus => ', memoryStatus);
  const { Text } = Typography;

  return (
    <Row
        type='flex'
        justify='space-between'
        align='middle'
        className='controls'
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      { unsupportMessage ? (
        <Text>{unsupportMessage}</Text>
      ) : (
        <Fragment>
          <Col className='status' md={12} lg={4}>
            <p>totalJSHeapSize(Byte)</p>
            <p>{totalJSHeapSize}</p>
          </Col>
          <Col className='status' md={12} lg={4}>
            <p>usedJSHeapSize(Byte)</p>
            <p>{usedJSHeapSize}</p>
          </Col>
          <Col className='status' md={12} lg={4}>
            <p>jsHeapSizeLimit(Byte)</p>
            <p>{jsHeapSizeLimit}</p>
          </Col>
          <Col className='status' md={12} lg={4}>
            <p>deviceMemory(GigaByte)</p>
            <p>{deviceMemory}</p>
          </Col>
          <Col className='status' md={12} lg={4}>
            <p>Is Memory overLoaded?</p>
            <p>{overLoaded ? 'Yes' : 'No'}</p>
          </Col>
        </Fragment>
      ) }
    </Row>
  );
};

const Header = ({
  manualAnimationTest,
  setManualAnimationTest,
  switchAnimation,
  shuffle,
  search,
  setColumns,
  setMargin,
  setHeight,
  columns,
  margin
}) => {
  return (
    <div className='header'>
      <Row
        type='flex'
        justify='space-between'
        align='middle'
        className='controls'
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='control' md={12} lg={4}>
          <Button type='primary' onClick={shuffle} block>
            Shuffle
          </Button>
        </Col>
        <Col className='control' md={12} lg={4}>
          <Input
            suffix={<Icon type='search' style={{color: 'rgba(0,0,0,.25)'}} />}
            placeholder='input search text'
            onChange={search} />
        </Col>
        <Col className='control' md={12} lg={4}>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={setColumns}>
                { [1, 2, 3, 4, 5, 6].map(element => (<Menu.Item key={element}>{element}</Menu.Item>)) }
              </Menu>
            }>
            <Button block>
              {columns} Columns <Icon type='down' />
            </Button>
          </Dropdown>
        </Col>
        <Col className='control' md={12} lg={4}>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={setMargin}>
                { [0, 20, 40, 70].map(element => (<Menu.Item key={element}>{element}</Menu.Item>)) }
              </Menu>
            }>
            <Button block>
              {margin} px margin <Icon type='down' />
            </Button>
          </Dropdown>
        </Col>
        <Col className='control' md={12} lg={4}>
          <SwitchWithLabel label='Cell Height' defaultChecked onChange={setHeight} />
        </Col>
      </Row>
      <div className='animation-setting'>
        <div className='animaton-setting-option'>
          <Checkbox onChange={setManualAnimationTest}>Manual Animation Test</Checkbox>
        </div>
        <div className='animaton-setting-option'>
          <SwitchWithLabel label='Animations on/off' disabled={!manualAnimationTest} defaultChecked onChange={switchAnimation} />
        </div>
      </div>
      <MemoryStatus />
    </div>
  )
};

export default Header;
