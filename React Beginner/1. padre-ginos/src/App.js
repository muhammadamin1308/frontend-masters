const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.desc),

    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement('h1', {}, "Padre Gino's"),
        React.createElement(Pizza, {
            name: "Pepperoni Pizza",
            desc: "Some Pizza"
        }),
        React.createElement(Pizza, {
            name: "Americano Pizza",
            desc: "Some Pizza"
        }),
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App))