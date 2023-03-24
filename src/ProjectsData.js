const ProjectsData = [
    // {
    //     // id: {
    //     //     type: DataTypes.INTEGER,
    //     //     primaryKey: true,
    //     //     autoIncrement: true,
    //     // },
    //     name: DataTypes.STRING,
    //     summary: DataTypes.STRING,
    //     imageURL: DataTypes.STRING,
    //     objectives: DataTypes.TEXT,
    //     futureImprovements: DataTypes.TEXT,
    //     techStack: DataTypes.TEXT,
    //     demolink: DataTypes.TEXT,
    //     githublink: DataTypes.TEXT,
    //     cta: DataTypes.TEXT
    // },
    {
        name: "Weather App",
        summary:
            "Weather app displaying current weather and forecast for a given location.",
        prviewSummary: "Weather app layout.",
        image: "weather-app-w-api.png",
        objectives: [
            "Practice with CSS selectors",
            "Layout using Bootstrap Grid",
            "Using emojis, setting their sizes",
            "Implementing custom styles by setting CSS properties",
        ],
        futureImprovements: [
            "Ability to enter different locations",
            "Retrieve weather data using an API",
            "Improve responsiveness for very small viewports",
            "Repalce emojis with custom icons,",
        ],
        techStack: ["HTML", "CSS", "Bootstrap"],
        demolink: "https://codepen.io/Doug-R/pen/eYyXrrB",
        githublink: "https://github.com/dougMR/weather-without-api",
        cta: "Sunny Skies Ahead",
    },
    {
        name: "News Website",
        summary: "Desktop news site.",
        prviewSummary: "Desktop layout for a news website home page.",
        image: "news-desktop-site.png",
        objectives: [
            "Practice with CSS selectors",
            "Layout using Bootstrap Grid",
            "Implementing custom styles by setting CSS properties",
            "Apply fonts from Google Fonts",
        ],
        futureImprovements: [
            "Make responsive.",
            "Retrieve news stories data using an API",
        ],
        techStack: ["HTML", "CSS", "Bootstrap"],
        demolink: "https://codepen.io/Doug-R/pen/rNpRbwL",
        githublink: null,
        cta: "This Just In!",
    },
    {
        name: "News Site Mobile Layout",
        summary: "Mobile news.",
        prviewSummary: "Mobile news site layout.",
        image: "news-mobile-site.png",
        objectives: [
            "Practice with CSS selectors",
            "Layout using Bootstrap Grid",
            "Implementing custom styles by setting CSS properties",
            "Apply fonts from Google Fonts",
        ],
        futureImprovements: [
            "Retrieve stories from a news API",
            "Make Responsive for Desktop.",
        ],
        techStack: ["HTML", "CSS", "Bootstrap"],
        demolink: "https://codepen.io/Doug-R/pen/jOYJoQL",
        githublink: null,
        cta: "Top Story!",
    },
    {
        name: "Feedback Form",
        summary: "Responsive feedback form, modeled after Google Forms.",
        prviewSummary: "Feedback form layout, based on Google forms.",
        image: "feedback-form.png",
        objectives: [
            "Practice with CSS selectors",
            "Practice with HTML form elements",
            "Layout using Bootstrap Grid",
            "Using CSS and Bootstrap to make the form responsive across viewport sizes",
        ],
        futureImprovements: [
            "Connect form to a script upon submit",
            "Add form data to a database",
            "Create and trigger a 'thankyou' screen",
        ],
        techStack: ["HTML", "CSS", "Bootstrap"],
        demolink: "https://codepen.io/Doug-R/pen/popYmGp",
        githublink: null,
        cta: "Your Opinion Matters",
    },
    {
        name: "MegaFlix Webpage",
        summary: "One of two, webpage layout modeled after a popular streaming service",
        prviewSummary: "Re-creation of a popular streaming site.",
        image: "flix-site.png",
        objectives: [
            "Practice with CSS selectors",
            "Layout using Bootstrap Grid",
            "Advanced layout techniques with CSS properties and Bootstrap classes",
            "Make responsive sizing / spacing from desktop to large screens",
        ],
        futureImprovements: [
            "Ability to scroll movie thumbnail rows",
            "Responsive layout change on small screens",
            "Cycle through movies/shows in 'Featured' hero section, pulling content from a database",
            "Add user profile dropdown menu",
            "Play videos",
        ],
        techStack: ["HTML", "CSS", "Bootstrap"],
        demolink: "https://www.dougroussin.com/mega-flix/",
        githublink: "https://github.com/dougMR/mega-flix",
        cta: "Action!",
    },
    {
        name: "Another Netflix Clone",
        summary: "Two of two, clone of a popular streaming service.",
        prviewSummary: "Clone of a clone.",
        image: "netflix-clone-cohort-1.png",
        objectives: [
            "Practice with CSS selectors",
            "Layout using Bootstrap Grid",
            "Advanced layout techniques with CSS properties",
            "Make responsive sizing / spacing from desktop to large screens",
        ],
        futureImprovements: [
            "Ability to scroll movie thumbnail rows",
            "Load separate video previews based on thumbnail selected",
            "Cycle through movies/shows in 'Featured' hero section, pulling content from a database",
            "Add user profile dropdown menu",
            "Play videos",
            "Connect to movie database",
        ],
        techStack: ["HTML", "CSS"],
        demolink: "https://www.dougroussin.com/careersInCode-netflix-clone/",
        githublink: "https://github.com/dougMR/careersInCode-netflix-clone",
        cta: "More Action!",
    },

];

export default ProjectsData;