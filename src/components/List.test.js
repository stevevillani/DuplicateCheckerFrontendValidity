
import { configure, shallow } from 'enzyme'
import List from './List'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('will display correct name', () => {
    
    var vals = [{first:'firstName', last:'lastName'},{first:'firstName', last:'lastName'},{first:'firstName', last:'lastName'}]
    const wrapper = shallow( <List name='Name' data={vals} /> )
    
    expect(wrapper.find('.header').text()).toEqual(' Name (3)');
});

it('will display correct number of duplicates and uniques', () => {
    
    var vals = [{first:'firstName', last:'lastName'},{first:'firstName', last:'lastName'},{first:'firstName', last:'lastName'}]
    const wrapper = shallow( <List name='Name' data={vals} /> )
    
    expect(wrapper.find('li')).toHaveLength(3);
});

