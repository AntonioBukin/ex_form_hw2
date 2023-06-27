import { Component } from "react";

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
    render() {
        const { items } = this.state;

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
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Book title</label>
                                <input className={styles.textField} placeholder="Book title"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Book author</label>
                                <input className={styles.textField} placeholder="Book author"/>
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