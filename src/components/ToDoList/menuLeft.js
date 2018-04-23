import React  from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'


const Component = React.Component ;


export class MenuLeft extends Component
{
    state = { activeItem: 'uncompleted' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu vertical fluid >
                <Menu.Item name='uncompleted' active={activeItem === 'uncompleted'} onClick={this.handleItemClick}>
                    {/*<Label color='teal'>1</Label>*/}
                    To-do List
                </Menu.Item>

                <Menu.Item name="completed"  active={activeItem === 'completed'} onClick={this.handleItemClick}>
                    {/*<Label>51</Label> */}
                    Completed tasks
                </Menu.Item>

                <Menu.Item>
                    <Input icon='search' placeholder='Search to do tasks ...' />
                </Menu.Item>
            </Menu>
        )
    }
}
