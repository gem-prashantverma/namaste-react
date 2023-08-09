const heading = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"firstchild"},
        [React.createElement(
            "h1",
            {id:"firstheading"},
            "Hello This Is Me"),React.createElement(
                                "h1",
                                {id:"secondheading"},
                                "Hello This second Is Me")]),React.createElement(
                                    "div",
                                    {id:"firstchild"},
                                    [React.createElement(
                                        "h1",
                                        {id:"firstheading"},
                                        "Hello This Is Me"),React.createElement(
                                                            "h1",
                                                            {id:"secondheading"},
                                                            "Hello This second Is Me")])])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)