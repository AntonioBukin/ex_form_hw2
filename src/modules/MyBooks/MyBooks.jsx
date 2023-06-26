import { Component } from "react";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";

import styles from "./my-books.module.scss";

class MyBook extends Component {
    render() {
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
                            <li className={styles.listItem}>
                                Title: Worm. Author: Джон Маккрей. <button>delete</button>
                            </li>
                            <li className={styles.listItem}>
                                Title: Ward. Author: Джон Маккрей. <button>delete</button>
                            </li>
                        </ol>
                    </MyBooksBlock>
                </div>
            </div>
        )
    }

}

export default MyBook;