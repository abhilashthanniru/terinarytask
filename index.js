function determineRole(knowledge) {
    return knowledge.html && knowledge.css && knowledge.bootstrap
        ? !knowledge.js && knowledge.react && knowledge.node
            ? "UI/UX Designer"
            : knowledge.js && knowledge.react && !knowledge.node
            ? "Frontend Developer"
            : knowledge.js && knowledge.node && !knowledge.react
            ? "Backend Developer"
            : knowledge.js && knowledge.node && knowledge.react
            ? "Fullstack Developer"
            : "Join 10000-coders"
        : "Join 10000-coders";
}

// Example usage:
const student1 = { html: true, css: true, bootstrap: true, js: false, react: true, node: true };
console.log(determineRole(student1)); // Output: UI/UX Designer

const student2 = { html: true, css: true, bootstrap: true, js: true, react: true, node: false };
console.log(determineRole(student2)); // Output: Frontend Developer

const student3 = { html: true, css: true, bootstrap: true, js: true, react: false, node: true };
console.log(determineRole(student3)); // Output: Backend Developer

const student4 = { html: true, css: true, bootstrap: true, js: true, react: true, node: true };
console.log(determineRole(student4)); // Output: Fullstack Developer

const student5 = { html: false, css: false, bootstrap: false, js: false, react: false, node: false };
console.log(determineRole(student5)); // Output: Join 10000-coders
