import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
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
      <h1>Home Page Content</h1>
    </div>
  );
}
