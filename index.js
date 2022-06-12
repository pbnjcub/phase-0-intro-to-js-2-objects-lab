// Write your solution in this file!
const employee = {
    name: "Paul Jung",
    streetAddress: {
        street: "27 Main St.",
        city: "Englewood",
        state: "NJ",
        zipCode: "07631",
    }
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
};

const employeeTwo = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Michelle Carstents"
    );

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

const employeeThree = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Mark Gagne"
);


function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

const employeeFour = deleteFromEmployeeByKey (
    employee,
    "name"
);

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};

const employeeFive = destructivelyDeleteFromEmployeeByKey(
    employee,
    "name"
    );