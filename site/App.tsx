import React from 'react';
import { Alert } from '@jhdev96/ozone';
import { Badge } from '@jhdev96/ozone';
import { Button } from '@jhdev96/ozone';
import { ButtonRow } from '@jhdev96/ozone';
import { ButtonGroup } from '@jhdev96/ozone';
import { Breadcrum } from '@jhdev96/ozone';
import { Card } from '@jhdev96/ozone';
import { Checkbox } from '@jhdev96/ozone';
import { ContextMenu } from '@jhdev96/ozone';
import { RadioInput } from '@jhdev96/ozone'
import RadioExample from './RadioExample';
import { Dropdown } from '@jhdev96/ozone'
import { Section } from '@jhdev96/ozone'
import ModalExample from './ModalExample';
import { Navbar } from '@jhdev96/ozone'
import { Pill } from '@jhdev96/ozone'
import * as icons from '@jhdev96/ozone-icons';
import { FormMenu } from '@jhdev96/ozone'
import FormMenuExample from './FormMenuExample';
import { SearchBox } from '@jhdev96/ozone'
import SearchExample from './SearchExample';
import { TextInput } from '@jhdev96/ozone'
import { Tooltip } from '@jhdev96/ozone'
import { Popover } from '@jhdev96/ozone'
import { Label } from '@jhdev96/ozone'
import TabsExample from './TabsExample';
import { TextArea } from '@jhdev96/ozone'
import Colors from '@jhdev96/ozone-colors';
import './App.css';


interface ComponentInfoProps {
  title?: string,
  children?: React.ReactNode
}

const ComponentInfo = ({title, children}: ComponentInfoProps) => {
  return (
    <>
      <br />
      <h1>{title}</h1>
      <p style={{fontSize: '20px'}}>{children}</p>
      <hr />
      <br />
    </>
  )
}

function App(): JSX.Element {
  return (
    <div className="App">
      <ComponentInfo title="Alert">
        Important information displayed at the top of the screen.
      </ComponentInfo>
      <Section title="Variations" variation="basic">
        <Alert variation="progress" animate>Uploaded 1 of 4 documents</Alert>
        <Alert variation="info" animate>You have stopped sharing folder ABC</Alert>
        <Alert variation="warning" animate>Your storage is running low</Alert>
        <Alert variation="success" animate>Your info has been successfully updated</Alert>
        <Alert variation="error" animate>Oops. Something went wrong</Alert>
      </Section>
      <Section title="Alert without a close button" variation="basic">
        <Alert variation="warning" canBeClosed={false}>
          Warning message goes here
        </Alert>
      </Section>
      <ComponentInfo title="Badge">
        Element used for small labels and counts
      </ComponentInfo>
      <Section title="Headings" variation="basic">
        <h1>Example heading <Badge>New</Badge></h1>
        <h2>Example heading <Badge>New</Badge></h2>
        <h3>Example heading <Badge>New</Badge></h3>
        <h4>Example heading <Badge>New</Badge></h4>
        <h5>Example heading <Badge>New</Badge></h5>
      </Section>
      <Section title="Buttons" variation="basic">
        <Button variation="primary" flat>
          Notifications
          <Badge variation="secondary">10</Badge>
        </Button>
      </Section>
      <Section title="Positioning" variation="basic">
        <Button variation="primary" flat>
          Profile
          <Badge 
            variation="secondary" 
            placement="topRight"
            absolute
            circular
          >
            5
          </Badge>
        </Button>
      </Section>
      <ComponentInfo title="Breadcrum">
        Element used for displaying a trail of links.
      </ComponentInfo>
      <Section title="Basic breadcrum" variation="basic">
        <Breadcrum>
          <Breadcrum.Link>Home</Breadcrum.Link>
          <Breadcrum.Link>Library</Breadcrum.Link>
          <Breadcrum.Link isActive>Data</Breadcrum.Link>
        </Breadcrum>
      </Section>
      <Section title="Breadcrum with an overflow" variation="basic">
        <Breadcrum>
          <Breadcrum.Overflow ariaLabel="more links">
            <Breadcrum.Link>Root</Breadcrum.Link>
            <Breadcrum.Link>Folder1</Breadcrum.Link>
            <Breadcrum.Link>Folder2</Breadcrum.Link>
          </Breadcrum.Overflow>
          <Breadcrum.Link>Folder3</Breadcrum.Link>
          <Breadcrum.Link isActive>Folder4</Breadcrum.Link>
        </Breadcrum>
      </Section>
      <Section title="Overflow as the second item" variation="basic">
        <Breadcrum>
          <Breadcrum.Link>Home</Breadcrum.Link>
          <Breadcrum.Overflow ariaLabel="more links">
            <Breadcrum.Link>Documents</Breadcrum.Link>
            <Breadcrum.Link>Shared</Breadcrum.Link>
            <Breadcrum.Link>Downloads</Breadcrum.Link>
          </Breadcrum.Overflow>
          <Breadcrum.Link>Folder1</Breadcrum.Link>
          <Breadcrum.Link isActive>Folder2</Breadcrum.Link>
        </Breadcrum>
      </Section>
      <ComponentInfo title="Button">
        Clickable elements that trigger actions.
      </ComponentInfo>
      <Section title="Variations" variation="basic">
        <Button variation="basic" className="margin-x">Basic</Button>
        <Button variation="primary" className="margin-x">Primary</Button>
        <Button variation="secondary" className="margin-x">Secondary</Button>
        <Button variation="warning" className="margin-x">Warning</Button>
      </Section>
      <Section title="Flat buttons" variation="basic">
        <Button className="margin-x" variation="primary" flat>Primary Flat</Button>
        <Button className="margin-x" variation="secondary" flat>Secondary Flat</Button>
        <Button className="margin-x" variation="warning" flat>Warning Flat</Button>
      </Section>
      <Section title="Outlined buttons" variation="basic">
        <Button className="margin-x" variation="primary" outline>
          Primary outline
        </Button>
        <Button className="margin-x" variation="secondary" outline>
          Secondary outline
        </Button>
      </Section>
      <Section title="Disabled buttons" variation="basic">
        <Button className="margin-x" variation="primary" flat isDisabled>Disabled</Button>
        <Button className="margin-x" variation="secondary" flat isDisabled>Disabled</Button>
        <Button className="margin-x" variation="basic" isDisabled>Disabled</Button>
      </Section>
      <Section title="Loading buttons" variation="basic">
        <Button className="margin-x" variation="primary" flat isLoading>Continue</Button>
        <Button className="margin-x" variation="secondary" outline isLoading>Continue</Button>
        <Button className="margin-x" variation="basic" isLoading>Continue</Button>
      </Section>
      <Section title="Small buttons" variation="basic">
        <Button variation="basic" size="small">
          <icons.Camera color={Colors.core.BLACK} />
        </Button>
        <Button className="margin-x" variation="basic" size="small">
          <icons.Video color={Colors.core.BLACK} />
        </Button>
      </Section>
      <Section title="Full width buttons" variation="basic">
        <Button flat fill>Full width</Button>
      </Section>
      <ComponentInfo title="ButtonGroup">
        A group of buttons juxtaposed against one another.
      </ComponentInfo>
      <ButtonGroup rounded>
        <Button>This</Button>
        <Button>is</Button>
        <Button>a</Button>
        <Button>button</Button>
        <Button>group</Button>
      </ButtonGroup>
      <ComponentInfo title="ButtonRow">
        Justify a set of buttons horizontally in a container.
      </ComponentInfo>
      <h2>Placement</h2>
      <Section title="Left" variation="basic">
        <ButtonRow placement="left">
          <Button className="margin-x" variation="basic">Back</Button>
          <Button className="margin-x" variation="primary" flat>Continue</Button>
        </ButtonRow>
      </Section>
      <Section title="Center" variation="basic">
        <ButtonRow placement="center">
          <Button className="margin-x" variation="basic">Back</Button>
          <Button className="margin-x" variation="primary" flat>Continue</Button>
        </ButtonRow>
      </Section>
      <Section title="Right" variation="basic">
        <ButtonRow placement="right">
          <Button className="margin-x" variation="basic">Back</Button>
          <Button className="margin-x" variation="primary" flat>Continue</Button>
        </ButtonRow>
      </Section>
      <ComponentInfo title="Card">
        A presentational element used for briefly conveying information.
      </ComponentInfo>
      <h3>Primary card</h3>
      <Card variation="primary">
        <Card.Header>
          <Card.Title />
          <Button 
            className="margin-y"
            variation="basic" 
            size="small" 
          >
            Card button
          </Button>
        </Card.Header>
        <Card.Body>This is a primary card</Card.Body>
      </Card>
      <h3>Basic card</h3>
      <Card variation="basic">
        <Card.Header>
          <Card.Title>MVP</Card.Title>
          <Pill variation="success">Open</Pill>
        </Card.Header>
        <Card.Body>This is a basic card</Card.Body>
        <Badge 
          variation="primary"  
          placement="topRight"
          absolute 
          circular
        >
          10
        </Badge>
      </Card>
      <ComponentInfo title="Checkbox">
        Element used for checking and unchecking items in a form
      </ComponentInfo>
      <Section title="Single checkbox" variation="basic">
        <Checkbox>Remember me</Checkbox>
      </Section>
      <Section title="Multiple checkboxes" variation="basic">
        <Checkbox>New York</Checkbox>
        <Checkbox>London</Checkbox>
        <Checkbox>Tokyo</Checkbox>
      </Section>
      <h3>Disabled checkboxes</h3>
      <Checkbox isDisabled isChecked>Morning</Checkbox>
      <Checkbox isDisabled>Night</Checkbox>
      <h3>Checkbox with an error</h3>
      <Checkbox hasError>I accept the Terms of Service</Checkbox>
      <ComponentInfo title="ContextMenu">
        Context menu.
      </ComponentInfo>
      <Section title="Context Menu" variation="basic">
        <div 
          id="ctx1" 
          style={{backgroundColor: '#BEECFF', color: '#05151C'}}
        >
          Right-click me
        </div>
        <ContextMenu targetId="ctx1">
          <ContextMenu.Title>Menu</ContextMenu.Title>
          <ContextMenu.Body>
            <ContextMenu.Item>A</ContextMenu.Item>
            <ContextMenu.Item>B</ContextMenu.Item>
            <ContextMenu.Item>C</ContextMenu.Item>
            <ContextMenu.Item>D</ContextMenu.Item>
          </ContextMenu.Body>
        </ContextMenu>
        <br />
        <div 
          id="ctx2" 
          style={{backgroundColor: '#E9E9E9', color: '#353640'}}
        >
          Menu with a break
        </div>
        <ContextMenu targetId="ctx2">
          <ContextMenu.Title>
            <icons.Folder color={Colors.core.BLACK} /> Docs
          </ContextMenu.Title>
          <ContextMenu.Body>
            <ContextMenu.Item>Open</ContextMenu.Item>
            <ContextMenu.Item>Rename</ContextMenu.Item>
            <ContextMenu.Break />
            <ContextMenu.Item>Favorite</ContextMenu.Item>
            <ContextMenu.Item>Delete</ContextMenu.Item>
          </ContextMenu.Body>
        </ContextMenu>
      </Section>
      <ComponentInfo title="Dropdown">
        Element that allows for the selection of one option from many.
      </ComponentInfo>
      <Section title="Variations" variation="basic">
        <div style={{display: 'inline-flex'}}>
          <Dropdown
            defaultValue="Basic" 
            onSelection={(item) => console.log(item, "was selected")}
          >
            <Dropdown.Item name="A">Item A</Dropdown.Item>
            <Dropdown.Item name="B">Item B</Dropdown.Item>
            <Dropdown.Item name="C">Item C</Dropdown.Item>
          </Dropdown>
          <Dropdown 
            variation="filter" 
            defaultValue="Filter"
            onSelection={(item) => console.log(item, "was selected")}
            saveSelection
          >
            <Dropdown.Item>Item A</Dropdown.Item>
            <Dropdown.Item>Item B</Dropdown.Item>
            <Dropdown.Item>Item C</Dropdown.Item>
          </Dropdown>
        </div>
      </Section>
      <ComponentInfo title="FormMenu">
        Navigational element used to move through a multi-part form
      </ComponentInfo>
      <Section title="Basic form menu" variation="basic">
        <FormMenu activeItem="Part 1">
          <FormMenu.Item>Part 1</FormMenu.Item>
          <FormMenu.Item>Part 2</FormMenu.Item>
          <FormMenu.Item>Part 3</FormMenu.Item>
          <FormMenu.Item>Part 4</FormMenu.Item>
        </FormMenu>
      </Section>
      <h3>FormMenu example</h3>
      <FormMenuExample 
        stages={[
          "Personal info", 
          "Company info", 
          "Company location"
        ]} 
      />
      <ComponentInfo title="Navbar">
        Elements containing links for navigating a site.
      </ComponentInfo>
      <Section title="Horizontal navbar with three links" variation="basic">
        <Navbar orientation="horizontal">
          <Navbar.Brand to="">Navbar</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Item>
              <Navbar.Link to="#">Home</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link to="#">About</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link to="#">Contact Us</Navbar.Link>
            </Navbar.Item>
          </Navbar.Nav>
        </Navbar>
      </Section>
      <Section title="Justified navbar" variation="basic">
        <div className="header">
          <Navbar orientation="horizontal" justify="space-between" theme="dark">
            <Navbar.Brand to="">Brand</Navbar.Brand>
            <Navbar.Nav>
              <Popover content="No notifications" theme="dark">
                <Navbar.Item>
                  <icons.Bell color="#fff" />
                </Navbar.Item>
              </Popover>
              <Navbar.Item><icons.Help color="#fff" /></Navbar.Item>
              <Navbar.Item><icons.Cog color="#fff" /></Navbar.Item>
            </Navbar.Nav>
          </Navbar>
        </div>
      </Section>
      <Section title="Responsive navbar" variation="basic">
        <div className="header">
          <Navbar orientation="horizontal" justify="space-between" theme="dark">
            <Navbar.Brand to="">Navbar</Navbar.Brand>
            <Navbar.Toggle targetId="navCollapse">
              <icons.Hamburger color="#fff" />
            </Navbar.Toggle>
            <Navbar.Collapse id="navCollapse">
              <Navbar.Nav>
                <Navbar.Item>
                  <Navbar.Link to="#" isActive>Home</Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Navbar.Link to="#">About</Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Navbar.Link to="#" isDisabled>Disabled</Navbar.Link>
                </Navbar.Item>
              </Navbar.Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Section>
      <ComponentInfo title="Modal">
        Pop-up boxes that display information.
      </ComponentInfo>
      <ModalExample />
      <ComponentInfo title="Popover">
        Floating labels conveying information about a UI element
      </ComponentInfo>
      <Section title="Popover" variation="basic">
        <Popover 
          content={
            <>
              <h3 className="no-margin">Popover</h3>
              <p>This is a popover</p>
            </>
          }
        >
          <Button variation="basic">Click me</Button>
        </Popover>
      </Section>
      <ComponentInfo title="Pill">
        Colored labels used for displaying information.
      </ComponentInfo>
      <Section title="Variations" variation="basic">
        <Pill variation="info">Info</Pill>
        <Pill variation="success">Success</Pill>
        <Pill variation="warning">Warning</Pill>
        <Pill variation="error">Error</Pill>
        <Pill variation="routine">Routine</Pill>
      </Section>
      <ComponentInfo title="RadioInput">
        Element allowing for the exclusive selection of an option.
      </ComponentInfo>
      <Section variation="basic" title="Single radio input">
        <RadioInput name="option1">Option 1</RadioInput>
      </Section>
      <Section variation="basic" title="Multiple radio inputs">
        <RadioExample />
      </Section>
      <h3>Disabled radio input</h3>
      <RadioInput name="option" isChecked isDisabled>Option A</RadioInput>
      <RadioInput name="option" isDisabled>Option B</RadioInput>
      <RadioInput name="option" isDisabled>Option C</RadioInput>
      <h3>Radio input with an error</h3>
      <RadioInput name="option" hasError>Option A</RadioInput>
      <ComponentInfo title="SearchBox">
        Component that facilitates user queries
      </ComponentInfo>
      <Section title="Basic search" variation="basic">
        <SearchBox />
      </Section>
      <Section title="Search with filter" variation="basic">
        <SearchBox 
          searchFilter={
            <Dropdown 
              defaultValue="by"
              variation="filter"  
              saveSelection
            >
              <Dropdown.Item>Filter A</Dropdown.Item>
              <Dropdown.Item>Filter B</Dropdown.Item>
              <Dropdown.Item>Filter C</Dropdown.Item>
            </Dropdown>
          }
        />
      </Section>
      <Section title="Outlined search" variation="basic">
        <SearchBox 
          searchFilter={
            <Dropdown
              defaultValue="by"
              variation="filter" 
              saveSelection
            >
              <Dropdown.Item>Filter A</Dropdown.Item>
              <Dropdown.Item>Filter B</Dropdown.Item>
              <Dropdown.Item>Filter C</Dropdown.Item>
            </Dropdown>
          }
          outline
        />
      </Section>
      <Section title="Full width search" variation="basic">
        <SearchBox 
          searchFilter={
            <Dropdown 
              defaultValue="by"
              variation="filter" 
              saveSelection
            >
              <Dropdown.Item>Filter A</Dropdown.Item>
              <Dropdown.Item>Filter B</Dropdown.Item>
              <Dropdown.Item>Filter C</Dropdown.Item>
            </Dropdown>
          }
          fullWidth
        />
      </Section>
      <Section title="Search with results" variation="basic">
        <div style={{position: 'absolute', top: '-17px'}}>
          <SearchExample />
        </div>
      </Section>
      <ComponentInfo title="Section">
        Dedicated areas used to isolate information
      </ComponentInfo>
      <h3>Primary section</h3>
      <Section title="Section title">
        <div>content goes here</div>
        <div>content goes here</div>
        <div>content goes here</div>
      </Section>
      <h3>Basic section</h3>
      <Section title="Section title" variation="basic">
        <div>content goes here</div>
        <div>content goes here</div>
        <div>content goes here</div>
      </Section>
      <h3>Narrow sections</h3>
      <div className="narrow-sections">
        <Section
          title="Primary narrow" 
          variation="primary" 
          fullWidth={false}
        >
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
        </Section>
        <div style={{marginLeft: '15px'}}>
          <Section 
            title="Basic narrow" 
            variation="basic" 
            fullWidth={false}
          >
            <div>content goes here</div>
            <div>content goes here</div>
            <div>content goes here</div>
          </Section>
        </div>
      </div>
      <ComponentInfo title="Tabs">
        Elements used to capture text from users
      </ComponentInfo>
      <Section title="Default tabs" variation="basic">
        <TabsExample />
      </Section>
      <ComponentInfo title="TextArea">
        Elements used to capture text from users
      </ComponentInfo>
      <Section title="TextArea" variation="basic">
        <TextArea 
          defaultValue="this is a text area" 
          minimumRows={4} 
          resize="horizontal"
        />
      </Section>
      <ComponentInfo title="TextInput">
        Elements used to capture text from users
      </ComponentInfo>
      <Section variation="basic" title="Text input with icon and clear button">
        <Label required>Address</Label>
        <TextInput 
          withClearButton
          icon={<icons.MapMarker />}
          isRequired
          validate={(valid: boolean) => {console.log(valid)}}
        >
          Input message
        </TextInput>
      </Section>
      <Section variation="basic" title="Numeric input">
        <TextInput 
          type="number"
          value={0}
          placeholder="Enter a number" 
          minValue={0}
          maxValue={10}
          isRequired
        />
      </Section>
      <Section variation="basic" title="Email input">
        <TextInput 
          type="email"
          placeholder="Enter email" 
          isRequired
        />
      </Section>
      <Section variation="basic" title="Password input">
        <form action="">
          <TextInput 
            type="password"
            placeholder="Enter password" 
            isRequired
            autoComplete="autocomplete"
          />
        </form>
      </Section>
      <Section variation="basic" title="Disabled input">
        <TextInput 
          type="text"
          value="Fixed value"
          placeholder="Enter text" 
          isDisabled
        />
      </Section>
      <ComponentInfo title="Tooltip">
        Elements used to briefly explain user interface features
      </ComponentInfo>
      <Section variation="basic" title="Tooltip">
        <Tooltip content="Hello">
          <Button flat>Hover over me</Button>
        </Tooltip>
      </Section>
    </div>
  )
}

export default App;