import { Image } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import DatePicker from '.';

const props = {
  label: 'test',
};

/* eslint-env jest */

it('renders', () => {
  let field = renderer
    .create(<DatePicker {...props} />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders value', () => {
  let field = renderer
    .create(<DatePicker {...props} value='text' />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders disabled value', () => {
  let field = renderer
    .create(<DatePicker {...props} value='text' disabled />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders default value', () => {
  let field = renderer
    .create(<DatePicker {...props} defaultValue='text' />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders multiline value', () => {
  let field = renderer
    .create(<DatePicker {...props} value='text' multiline />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders title', () => {
  let field = renderer
    .create(<DatePicker {...props} title='field' />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders error', () => {
  let field = renderer
    .create(<DatePicker {...props} error='message' />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders counter', () => {
  let field = renderer
    .create(<DatePicker {...props} value='text' characterRestriction={10} />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders restriction', () => {
  let field = renderer
    .create(<DatePicker {...props} value='text' characterRestriction={2} />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders prefix', () => {
  let field = renderer
    .create(<DatePicker {...props} value='text' prefix='$' />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders suffix', () => {
  let field = renderer
    .create(<DatePicker {...props} value='text' suffix='.com' />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});

it('renders accessory', () => {
  let render = () => <Image />

  let field = renderer
    .create(<DatePicker {...props} renderAccessory={render} />)
    .toJSON();

  expect(field)
    .toMatchSnapshot();
});
