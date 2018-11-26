const entities = (function () {
    const applicantsArray = {
        developers: [
            ["John", "Wick", "junior", 500],
            ["Hank", "Jones", "middle", 1500],
            ["Mason", "Brown", "senior", 3000],
            ["John", "Wick", "junior", 500],
            ["Hank", "Jones", "middle", 1500],
            ["Mason", "Brown", "senior", 3000],
            ["John", "Wick", "junior", 500],
            ["Hank", "Jones", "middle", 1500],
            ["Mason", "Brown", "senior", 3000],
            ["John", "Wick", "junior", 500],
            ["Hank", "Jones", "middle", 1500],
            ["Mason", "Brown", "senior", 3000]
        ],
        managers: [
            ["Jacob", "Davis", 0.6, 2500],
            ["James", "Miller", 0.75, 2500],
            ["Daniel", "Wilson", 0.9, 2500],
            ["Jacob", "Davis", 0.6, 2500],
            ["James", "Miller", 0.75, 2500],
            ["Daniel", "Wilson", 0.9, 2500],
            ["Jacob", "Davis", 0.6, 2500],
            ["James", "Miller", 0.75, 2500],
            ["Daniel", "Wilson", 0.9, 2500],
            ["Jacob", "Davis", 0.6, 2500],
            ["James", "Miller", 0.75, 2500],
            ["Daniel", "Wilson", 0.9, 2500]
        ],
        projects: [
            ["name", 10000, 5678],
            ["name", 10000, 4321],
            ["name", 10000, 1234],
            ["name", 10000, 2222],
            ["name", 10000, 1111],
            ["name", 10000, 6790],
            ["name", 50000, 3000],
            ["name", 100000, 7800],
            ["name", 50000, 5000],
            ["name", 50000, 3000],
            ["name", 100000, 9453],
            ["name", 5000, 1000],
            ["name", 50000, 3000],
            ["name", 50000, 54000],
            ["name", 50000, 3000],
            ["name", 50000, 15000],
            ["name", 50000, 3000],
            ["name", 100000, 8000],
            ["name", 100000, 4000],
            ["name", 50000, 3450],
            ["name", 5000000, 300000],
            ["name", 50000, 5748],
            ["name", 100000, 7458],
            ["name", 50000, 3649],
            ["name", 100000, 9586],
            ["name", 100000, 7645],
            ["name", 50000, 9857],
            ["name", 59000, 12434],
            ["name", 20000, 3354],
            ["name", 520000, 34345],
            ["name", 522000, 34534],
            ["name", 53000, 2344],
            ["name", 56000, 8765],
            ["name", 54000, 6750],
            ["name", 50000, 5000],
            ["name", 50000, 1000]
        ]
    }

    const applicants = {};

    applicants.developers = applicantsArray.developers.map((elem) => {
        return new Developer(elem[0], elem[1], elem[2], elem[3]);
    });

    applicants.managers = applicantsArray.managers.map((elem) => {
        return new Manager(elem[0], elem[1], elem[2], elem[3]);
    });

    applicants.projects = applicantsArray.projects.map((elem) => {
        return new Project(elem[0], elem[1], elem[2]);
    });

    return applicants;
})();
