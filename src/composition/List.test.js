import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<List />, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List key="Key" header="Title" cards="Content" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
