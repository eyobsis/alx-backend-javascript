#!/bin/bash

# Create 0-main.js
cat > 0-main.js << EOF
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
EOF

# Create 1-main.js
cat > 1-main.js << EOF
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
EOF

# Create 2-main.js
cat > 2-main.js << EOF
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
EOF

# Create 3-main.js
cat > 3-main.js << EOF
import handleProfileSignup from "./3-all";

handleProfileSignup();
EOF

# Create 4-main.js
cat > 4-main.js << EOF
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
EOF

# Create 5-main.js
cat > 5-main.js << EOF
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
EOF

# Create 6-main.js
cat > 6-main.js << EOF
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
EOF

# Create 7-main.js
cat > 7-main.js << EOF
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();
EOF

# Create 8-main.js
cat > 8-main.js << EOF
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
EOF

# Create 9-main.js
cat > 9-main.js << EOF
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
EOF

echo "Main files created successfully!"
