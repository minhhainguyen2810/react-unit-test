import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";

const findByTestAttr = (wrapper: ShallowWrapper, val: string) =>
  wrapper.find(`[data-test="${val}"]`);

test("renders without crash", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
test("render increment button", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "increment-button");
  expect(appComponent.length).toBe(1);
});
test("render counter display", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "counter-display");
  expect(appComponent.length).toBe(1);
});
test("counter start at 0", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "count");
  expect(appComponent.text()).toBe("0");
});
test("click button will increment counter display", () => {
  const wrapper = shallow(<App />);
  const btnComponent = findByTestAttr(wrapper, "increment-button");

  btnComponent.simulate("click");

  const countComponent = findByTestAttr(wrapper, "count");
  expect(countComponent.text()).toBe("1");
});
test("it should render decrement button", () => {
  const wrapper = shallow(<App />);
  const decrementButton = findByTestAttr(wrapper, "decrement-button");

  expect(decrementButton.length).toBe(1);
});
test("it should decrement the counter", () => {
  const wrapper = shallow(<App />);

  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");

  const countComponent = findByTestAttr(wrapper, "count");
  expect(countComponent.text()).toBe("0");
});
// test("it should show the error when decrease the counter when count = 0", () => {
//   const wrapper = shallow(<App />);

//   const decrementButton = findByTestAttr(wrapper, "decrement-button");
//   decrementButton.simulate("click");

//   const countComponent = findByTestAttr(wrapper, "error-message");
//   expect(countComponent.length).toBe(1);
// });
test("it should not less than zero", () => {
  const wrapper = shallow(<App />);

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");

  const countComponent = findByTestAttr(wrapper, "count");
  expect(countComponent.text()).toBe("0");
});
test("it should clear the error", () => {
  const wrapper = shallow(<App />);

  const decrementButton = findByTestAttr(wrapper, "increment-button");
  decrementButton.simulate("click");

  const countComponent = findByTestAttr(wrapper, "error-message");
  expect(countComponent.length).toBe(0);
});
