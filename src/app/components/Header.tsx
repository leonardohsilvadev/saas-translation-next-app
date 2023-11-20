import React from "react";
import { CreateChatButton, DarkModeToggle, Logo, UserButton } from ".";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";

async function Header() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Language Select */}

          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessageSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href="pricing">Pricing</Link>
          )}

          <DarkModeToggle />

          <UserButton session={session} />
        </div>
      </nav>

      {/* Upgrade Banner */}
    </header>
  );
}

export default Header;
