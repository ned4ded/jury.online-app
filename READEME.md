## Layout
Basic layout for Applications is:
``` bash
display
  ├── header
  └── content
        ├── side-menu
        └── dashboard
```
**display** - main container, has fixed height (100vh) and overflow:hidden.

**header** - is not fixed, but looks like that one

**side-menu** - contains 3 blocks: "user", container of "sign-out btn", and "navigation". "Nav" block has flexible height and is expanded depending on viewport height, could be scrolled.

**dashboard** - page's content container. Direct descendents of `src/pages` are rendered inside it.

All bolded names stand for NJK templates' and CSS classes' names.  
