import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Начальные данные для постов
            data: [
                { label: "Going to learn React", important: true, like: false, done: true, id: 1 },
                { label: "That is so good", important: false, like: false, done: false, id: 2 },
                { label: "I need a break", important: false, like: false, done: false, id: 3 },
            ],
            term: "", // Строка для поиска
            filter: "all" // Фильтр для отображения постов
        };

        // Привязка методов к контексту класса
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.maxId = 4; // Уникальный ID для новых постов
    }

    // Метод для удаления поста по ID
    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr // Возвращаем обновленный массив постов
            }
        });
    }

    // Метод для добавления нового поста
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++ // Увеличиваем maxId для уникальности
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr // Возвращаем новый массив постов
            }
        });
    }

    // Метод для переключения важности поста
    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldItem = data[index];
            const newItem = { ...oldItem, important: !oldItem.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr // Возвращаем обновленный массив постов
            }
        });
    }

    // Метод для переключения состояния "нравится"
    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr // Возвращаем обновленный массив постов
            }
        });
    }

    // Метод для поиска постов по строке поиска
    seachPosts(items, term) {
        if (term.length === 0) {
            return items; // Возвращаем все посты, если строка поиска пустая
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1; // Фильтруем посты по совпадению в label
        });
    }

    // Метод для фильтрации постов по статусу (например, только "нравится")
    filterPosts(items, filter) {
        if (filter === "like") {
            return items.filter(item => item.like); // Возвращаем только понравившиеся посты
        } else {
            return items; // Возвращаем все посты
        }
    }

    // Метод для обновления строки поиска
    onUpdateSearch(term) {
        this.setState({ term }); // Обновляем состояние с новой строкой поиска
    }

    // Метод для выбора фильтра
    onFilterSelect(filter) {
        this.setState({ filter }); // Обновляем состояние с выбранным фильтром
    }

    // Метод для переключения состояния "Готово"
    onToggleDone(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldItem = data[index];
            const newItem = { ...oldItem, done: !oldItem.done }; // Переключаем состояние done
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr // Возвращаем обновленный массив постов
            };
        });
    }

    render() {
        const { data, term, filter } = this.state;
        const liked = data.filter(item => item.like).length; // Количество постов "нравится"
        const allPosts = data.length; // Общее количество постов
        const visiblePosts = this.filterPosts(this.seachPosts(data, term), filter); // Отфильтрованные посты

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    onToggleDone={this.onToggleDone} />
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}
