import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <Container className=" py-8 flex flex-col items-center md:flex-row justify-between gap-6">
        {/* Left Section */}
        <div>
          <Logo className="mx-auto sm:mx-0 w-40 h-16 sm:w-44 sm:h-20 md:w-48 md:h-24 " />
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} The Gooey Cookies. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
