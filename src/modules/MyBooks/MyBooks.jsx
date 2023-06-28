import { Component } from "react";
import { nanoid } from "nanoid";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";

import styles from "./my-books.module.scss";

class MyBook extends Component {
    state = {
        items: [
            {
                id: "1",
                title: "Worm",
                author: "John C. McCrae"
            },
            {
                id: "2",
                title: "Ward",
                author: "John C. McCrae"
            },
        ],
        title: "",
        author: "",
        filter: "",
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
        //console.log(name);
        //console.log(value);
    }

        handleSubmit = (e) => {
            e.preventDefault();
            this.setState(prevState => {
                const {title, author, items} = prevState;
                const newBook = {
                    id: nanoid(),
                    title, 
                    author,
                }

                return {items: [...items, newBook], title: "", author: ""}
            })
        }
    

    render() {
        const { title, author, items } = this.state;

        const elements = items.map(({id, title, author }) => (
            <li className={styles.listItem} key={id}>
                Title: {title}. Author: {author}. <button>delete</button>
            </li>
        ))

        return (
            <div className={styles.wrapper}>
                <h3 className={styles.title}>My Books</h3>
                <div className={styles.block}>
                    <MyBooksBlock title="Add new book">
                        <form onSubmit={this.handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Book title</label>
                                <input value={title} name="title" onChange={this.handleChange} className={styles.textField} placeholder="Book title"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Book author</label>
                                <input value={author} name="author" onChange={this.handleChange} className={styles.textField} placeholder="Book author"/>
                            </div>
                            <button type="submit">Add book</button>
                        </form>
                    </MyBooksBlock>
                    <MyBooksBlock title="Book list">
                        <input className={styles.textField} placeholder="enter book or author" />
                        <ol className={styles.list}>
                            {elements}
                        </ol>
                    </MyBooksBlock>
                </div>
            </div>
        )
    }

}

export default MyBook;