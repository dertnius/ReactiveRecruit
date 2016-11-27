
import React, {Component} from 'react'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';


export default class ToolbarMain extends Component
{

    render() 
    {

        return (
            <ButtonGroup>
                    <Button>Save</Button>
                    <Button>Export</Button>
                    <Button>Close</Button>
            </ButtonGroup>
            );
    }
}



