const React = require('react');
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import App from './../pages/index';
it("renders without crashing", () => {
  shallow(<App />);
});