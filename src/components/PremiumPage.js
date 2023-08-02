import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react';

const PremiumPage = () => {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          <h1>Hello, welcome to my site</h1>
          <h3>You´re autehnticated! this is the premium page</h3>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
  );
};

export default PremiumPage;
