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
