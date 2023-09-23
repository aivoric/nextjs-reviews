import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="font-orbitron font-bold">
          <NavLink href="/" name="Indie Games">
            Indie Gamer
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews"> Reviews </NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
