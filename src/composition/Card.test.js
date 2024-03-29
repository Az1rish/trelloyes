import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<Card />, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card key="Key" title="Title" content="Content" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

