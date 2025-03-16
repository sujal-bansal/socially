import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignUpButton mode="modal">
          <Button>Sign In</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button variant={"secondary"}>Click Me</Button>
      <ModeToggle />
    </div>
  );
}
