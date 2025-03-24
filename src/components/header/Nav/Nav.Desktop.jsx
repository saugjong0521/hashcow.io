const NavDesktop = () => {
    return (
      <nav className="flex w-full">
        <ul className="flex w-full h-full justify-between text-header-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="cursor-pointer">
                <p>{item.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#hashcowproject", label: "HASHCOW PROJECT" },
    { href: "#tokenomics", label: "TOKENOMICS" },
    { href: "#whitepaper", label: "WHITE PAPER" },
    { href: "#roadmap", label: "ROADMAP" },
    { href: "#community", label: "COMMUNITY" },
    { href: "#contactus", label: "CONTACT US" },
  ];
  
  export default NavDesktop;
  