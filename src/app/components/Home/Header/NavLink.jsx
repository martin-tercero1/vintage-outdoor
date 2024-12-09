export default function Link({href, text}) {
  return (
    <li className="">
      <a href={href}>{text}</a>
    </li>
  );
}
