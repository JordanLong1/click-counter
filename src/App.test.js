import App from './App';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// set up enzymes react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() }); 

test("component renders without error", () => {

}); 

test("renders button", () => {

});

test("renders counter display", () => {

});

