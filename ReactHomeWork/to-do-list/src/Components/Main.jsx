import './main.css'

const Main = () => {
    return ( 
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form>
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
            
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Learn JavaScript</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Learn React</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Have a life!</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                </ul>
            </section>
            <footer className="info">
            <p><a href="https://d12n.me/">Dazzlina</a></p>
        </footer>
</section>
     );
}
 
export default Main;