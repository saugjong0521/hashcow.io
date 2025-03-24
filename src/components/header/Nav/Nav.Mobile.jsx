const NavMobile = () => {
    return (
      <nav className="flex w-full">
        <ul className="flex flex-col text-header-white w-full h-full justify-between">
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
  
  export default NavMobile;
  