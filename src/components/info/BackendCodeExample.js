import React from 'react';

const code = `const client = new ApolloClient({
  uri: 'https://link.to.your.backend/graphql',
});`;

function BackendCodeExample() {
  return (
    <pre>
      <code style={{ color: '#c60f5e' }}>
        { code }
      </code>
    </pre>
  );
}

export default BackendCodeExample;
