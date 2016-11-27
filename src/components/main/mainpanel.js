import React, {Component} from 'react'
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ToolbarMain from '../toolbar/ToolbarMain';
import SearchBar from '../bar/SearchBar';

class MainPanel extends Component
{

    render() {

        return(
        <div>
            <Panel footer={<ToolbarMain/>} header={<SearchBar/>}>
                Panel content
            </Panel>
        </div>
        );
     
        
    }

}
export default MainPanel;