import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./components/ui/button";
export default function App() {
  const user = useUser();
console.log(user.user)
  return (
    <header>
      <SignedOut>
        <SignInButton >
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
