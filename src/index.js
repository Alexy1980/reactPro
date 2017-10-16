import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// подключение компонента new.js
import NewComponent from './new';

class App extends React.Component {
    // валидация в ReactJS
    /*static propTypes = {
        btnText: React.PropTypes.string.isRequired,
        h1Text: React.PropTypes.string.isRequired,
        newArray: React.PropTypes.array.isRequired
    };*/
    // State - состояние, которое ReactJS запоминает
    constructor(props){
        super(props);
        this.state = {
          text: 'test'
        };
    }

    componentWillMount(){

    }
    // метод, который обрабатывает state
    /*inputOnChange(event){
        console.log('Event', event.target.value);
        const text = event.target.value;
        this.setState({text});
    }*/



    /*static defaultProps = {
        btnText: 'Текст по-умолчанию'
    };

    btnOnClick(event){
        console.log('Clicked!!', event.target);
    }*/
    // возвр html код внутри скрипта
    // в return можно передавать только один узел!
    /*render() {
        console.log('Array', this.props.newArray);
        return (
            <div style={{backgroundColor: 'red'}} className="test">
                <h1>{this.props.h1Text}</h1>
                <h3>Hello!</h3>
                <p>text text text</p>
                <button onClick={this.btnOnClick}>{this.props.btnText}</button>
                <br/>
                <label htmlFor="text">Поле ввода</label><br/>
                <input name="text" type="text" value={this.state.text} onChange={this.inputOnChange.bind(this)}/>
            </div>
        );
    }*/
    render(){
        return (
                <div>
                    <NewComponent text="Hello world" />
                </div>
            );
    }
}

/*ReactDOM.render(
    <App h1Text="text text" newArray={[1, 2, 3]}/>,
    document.getElementById('app')
);*/
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
