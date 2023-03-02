INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 2),
        ("Accountant Manager", 160000, 3),
        ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Joe", "Harley", 2, NULL),
        ("Bob", "Bell", 3, 1),
        ("Jon", "Jay", 4, 2);