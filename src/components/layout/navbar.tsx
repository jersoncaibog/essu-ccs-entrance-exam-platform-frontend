import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <Link href="/login">sign in</Link>
    </header>
  );
};

export { Navbar };