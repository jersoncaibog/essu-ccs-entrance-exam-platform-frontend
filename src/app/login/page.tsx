"use client"

import { signIn, useSession } from "next-auth/react";
import { Main } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { toast, Toaster } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {

  const router = useRouter();
  const { data: session } = useSession();

  if (session) router.push("/");

  const handleGoogleLogin = async () => {
    signIn("google", { redirectTo: '/' });
  }

  return (
    <Main className="flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>ESSU CCS Admin Login</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="text" required disabled />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline pointer-events-none "
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required disabled />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full !cursor-not-allowed ">
            Login
          </Button>
          {/* <Button
            onClick={() => router.push("/register")}
            variant="outline"
            className="w-full"
          >
            Create Account
          </Button> */}
          <Button
            form="google-form"
            type="submit"
            onClick={() => handleGoogleLogin()}
            variant="outline"
            className="w-full"
          >
            <FcGoogle />
            <span className="leading-none">Continue with Google</span>
          </Button>
        </CardFooter>
      </Card>
      {/* <Toaster position="top-center" richColors duration={2000} /> */}
    </Main>
  );
}
