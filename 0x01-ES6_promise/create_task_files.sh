#!/bin/bash

# Create 1-promise.js
cat > 1-promise.js << EOF
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
EOF

# Create 2-then.js
cat > 2-then.js << EOF
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error());
}
EOF

# Create 3-all.js
cat > 3-all.js << EOF
import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  try {
    const results = await Promise.all(promises);
    console.log(\`\${results[0].body} \${results[1].firstName} \${results[1].lastName}\`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
EOF

# Create 4-user-promise.js
cat > 4-user-promise.js << EOF
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
EOF

# Create 5-photo-reject.js
cat > 5-photo-reject.js << EOF
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(\`\${fileName} cannot be processed\`));
}
EOF

# Create 6-final-user.js
cat > 6-final-user.js << EOF
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const results = await Promise.allSettled(promises);
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
EOF

# Create 7-load_balancer.js
cat > 7-load_balancer.js << EOF
export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  return Promise.race(promises);
}
EOF

# Create 8-try.js
cat > 8-try.js << EOF
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
EOF

# Create 9-try.js
cat > 9-try.js << EOF
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(\`Error: \${error.message}\`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
EOF

echo "Task files created successfully!"
