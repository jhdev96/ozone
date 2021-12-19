# Ozone Icons

This package contains React components representing UI icons.

```bash static
npm install @jhdev96/ozone-icons
```

## Usage

```js static
import { Success } from '@jhdev96/icons';
```

The following props can be passed to an icon component:
- color `string` - A hexcode to which will be assigned to the SVG.
- direction `"up" | "right" | "down" | "left"` - used to rotate the SVG (Arrow icon only)
- size `"sm" | "md" | "lg"` - sets the size of the icon.
- className `string` - Adds custom css classes to the icon.
- dataTestId `string` - A selector to use in testing environments.

> All of the above props are optional