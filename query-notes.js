[{"content":"import { render, screen } from '@testing-library/react';\n\nfunction ColorList() {\n  return (\n    <ul>\n      <li>Red</li>\n      <li>Blue</li>\n      <li>Green</li>\n    </ul>\n  )\n}","type":"code","id":"018a3"},{"content":"test('getBy, queryBy, findBy finding 0 elements', () => {\n  render(<ColorList />);\n\n  expect(\n    () => screen.getByRole('textbox')\n  ).toThrow();\n\n  expect(screen.queryByRole('textbox')).toEqual(null);\n\n  let errorThrown = false;\n  try {\n    await screen.findByRole('textbox');\n  } catch (err) {\n    errorThrown = true;\n  }\n  expect(errorThrown).toEqual(true)\n})","type":"code","id":"svvzd"},{"content":"test('getBy, queryBy, findBy when they find 1 element', async () => {\n  render(<ColorList />)\n\n  expect(\n    screen.getByRole('list')\n  ).toBeInTheDocument();\n\n  \n\n})","type":"code","id":"iqhze"}]