import React, {Component} from "react";

import "./post-add-form.css";

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

// Обрабатывает изменение значения в текстовом поле
onValueChange(e) {
    this.setState({
        text: e.target.value // Обновляет состояние с новым значением текста
    });
}

// Обрабатывает отправку формы
onSubmit(e) {
    e.preventDefault(); // Предотвращает перезагрузку страницы при отправке формы
    this.props.onAdd(this.state.text); // Вызывает метод добавления поста с текущим текстом
    this.setState({
        text: "" // Очищает текстовое поле после отправки
    });
}

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Millest sa praegu mõtled?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}/>
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        );
    }
}