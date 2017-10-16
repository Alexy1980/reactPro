import React, {Component} from 'react';

export default class NewComponent extends Component {

    // State - состояние, которое ReactJS запоминает
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }
    // возвр html код внутри скрипта
    // в return можно передавать только один узел!

    // жизненный цикл компонентов
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render!!!');
        return (
            <div style={{backgroundColor: 'red'}}>
                <h3>
                    New component
                </h3>
                <p>{ this.props.text }</p>
            </div>
        );
    }
}

