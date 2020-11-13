import React from 'react'
import App from './App';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// set up enzymes react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() }); 


const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test("component renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "component-app")
  expect(appComponent.length).toBe(1);
}); 

test("renders button", () => {
  const wrapper = setup(); 
  const button = findByTestAttribute(wrapper, "increment-button")
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup(); 
  const count = findByTestAttribute(wrapper, "count").text(); 
  expect(count).toBe("0");
}); 

test("clicking on button increments counter display", () => {
// find the button, then click the button, find the display, and test that the number has been incremented

const wrapper = setup(); 
const button = findByTestAttribute(wrapper, "increment-button"); 
button.simulate('click'); 
const count = findByTestAttribute(wrapper, "count").text();
expect(count).toBe("1"); 
});

test("renders decrement button", () => {
  const wrapper = setup(); 
  const button = findByTestAttribute(wrapper, "decrement-counter"); 
  expect(button.length).toBe(1);
}); 


test("clicking on button decrements the counter and counter does not go below zero", () => {
  const wrapper = setup(); 
  const button = findByTestAttribute(wrapper, "decrement-counter"); 
  button.simulate('click'); 
  const count = findByTestAttribute(wrapper, "count").text(); 
  expect(count).toBe("-1");
}); 

test("do not let the count go below 0", () => {
  const wrapper = setup(); 
  const count = findByTestAttribute(wrapper, "decrement-counter").get(0); 
  expect(count).toBe(0);
  count.simulate("click");
  new Error("The count can not go below zero")
});




