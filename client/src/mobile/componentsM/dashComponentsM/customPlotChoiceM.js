import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { constGraphTitles } from '../../../constants';
import ErrorPopup from './errorPopupM';

export default class CustomPlotChoiceM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphTitles: constGraphTitles,
            showPopupError: false
        }
        this.switches = [];
        this.indexes = [];
    }

    componentWillMount = () => {
        var i = 1;
        for (const graph of this.state.graphTitles) {
            this.switches.push(<Form.Check name={graph.title} label={graph.title} id={i} key={i} onChange={this.selectGraph} />);
            i++;
        }
    }

    selectGraph = (event) => {
        if (!event.target.id) { event.target.id = 0; }
        let i = this.indexes.indexOf(event.target.id);
        if (i < 0) { this.indexes.push(event.target.id); }
        else { this.indexes.splice(i, 1); }
    }

    submit = (event) => {
        if (this.indexes.length <= 4) {
            let selectedGraphs = [];
            for (const i of this.indexes) { selectedGraphs.push(this.state.graphTitles[i - 1]); }
            this.props.enter(selectedGraphs);
        }
        else {
            this.togglePopupError();
        }
    }

    togglePopupError = () => {
        this.setState({
            showPopupError: !this.state.showPopupError
        });
    }

    render = () => {
        return (
            <div id='graphChoice' style={{ fontWeight: '600' }}>
                <Form>{this.switches}</Form>
                <div style={{ textAlign: 'center' }}>
                    <Button onClick={this.submit} style={{ fontWeight: '600', backgroundColor: '#C22D2D', borderColor: '#C22D2D', width: '90%', marginTop: '15px', marginBottom: '40px', fontSize: '20px' }}>Submit</Button>
                </div>
                {this.state.showPopupError ?
                    <ErrorPopup
                        text='Please Select a Maximum of 4 Plots'
                        closePopup={this.togglePopupError.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}