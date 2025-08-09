import Image from "next/image";
import Link from "next/link";

const user = {};

export const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1>SnapCast</h1>
        </Link>

        {/* user avatar */}
        {user && (
          <figure>
            {/* TODO: Add this dynamic id */}
            <Link href="/profile/id">
              <button aria-label="user config">
                <Image
                  src="/assets/images/dummy.jpg"
                  alt="User"
                  width={36}
                  height={36}
                  className="rounded-full aspect-square"
                />
              </button>
            </Link>

            <button aria-label="Log out" className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="Log out"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};
