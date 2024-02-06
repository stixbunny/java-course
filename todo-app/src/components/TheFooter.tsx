import Link from "next/link";

export default function TheFooter() {
  return (
    <header className="w-100 flex flex-row items-center gap-4 p-4 justify-between border border-borderhigh bg-backgroundmid text-xs">
      <div className=""> Spring Boot & React app developed by <Link className="link text-primary hover:text-primaryhover" href="http://www.github.com/stixbunny">@stixbunny</Link>.</div>
      <div className="">Source code can be found <Link className="link text-primary hover:text-primaryhover" href="http://www.github.com/stixbunny/java-course">here</Link></div>
    </header>
  );
}