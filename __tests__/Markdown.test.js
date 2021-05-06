const React = require('react');
const renderer = require('react-test-renderer');
import Markdown from './../Files/Components/Message/Markdown';

// ========
// Markdown
// ========
test('Markdown--Attachment', async function () {
  const component = renderer.create(<Markdown MD={'![Image](htttps://repl.it/)'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Url', async function () {
  const component = renderer.create(<Markdown MD={'[Repl](htttps://repl.it/)'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Url-2', async function () {
  const component = renderer.create(<Markdown MD={'<htttps://repl.it/>'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--BlockQoute', async function () {
  const component = renderer.create(<Markdown MD={'> Test'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--InlineCode', async function () {
  const component = renderer.create(<Markdown MD={'`Inline`'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Codeblock', async function () {
  const component = renderer.create(<Markdown MD={'```js\nconsole.log(\'Hello world\');\n```'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Bold', async function () {
  const component = renderer.create(<Markdown MD={'**Bold**'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--StrikeThrough', async function () {
  const component = renderer.create(<Markdown MD={'~~StrikeThrough'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Underline', async function () {
  const component = renderer.create(<Markdown MD={'__Underline__'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Italic', async function () {
  const component = renderer.create(<Markdown MD={'*console.log(\'Hello world\');*'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Bold--And--Italic', async function () {
  const component = renderer.create(<Markdown MD={'***test***'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-1', async function () {
  const component = renderer.create(<Markdown MD={'# h1'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-1-Type-2', async function () {
  const component = renderer.create(<Markdown MD={'h1\n===='} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-2', async function () {
  const component = renderer.create(<Markdown MD={'## h2'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-2-Type-2', async function () {
  const component = renderer.create(<Markdown MD={'h2\n---'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-3', async function () {
  const component = renderer.create(<Markdown MD={'### h3'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-4', async function () {
  const component = renderer.create(<Markdown MD={'#### h4'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-5', async function () {
  const component = renderer.create(<Markdown MD={'##### h5'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--Header-6', async function () {
  const component = renderer.create(<Markdown MD={'###### h6'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Markdown--Channel', async function () {
  const component = renderer.create(<Markdown MD={'#Main'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Markdown Lists
test('Markdown--Ordered--List', async function () {
  const component = renderer.create(<Markdown MD={'1. test\n2. test'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--unordered--List', async function () {
  const component = renderer.create(<Markdown MD={'* test\n* test'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--unordered--List-2', async function () {
  const component = renderer.create(<Markdown MD={'+ test\n+ test'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Markdown--unordered--List-3', async function () {
  const component = renderer.create(<Markdown MD={'- test\n- test'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Markdown--Horizontal--Rule', async function () {
  const component = renderer.create(<Markdown MD={'test\n\n---\n\n'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});