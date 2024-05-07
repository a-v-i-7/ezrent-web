import Link from "next/link";
import * as Icon from "react-bootstrap-icons";

export default function IconLink({
  href,
  icon,
  key,
  linkClass,
  iconClass,
  children,
  iconSize,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
  key: string;
  linkClass?: string;
  iconClass?: string;
  iconSize?:string;
}) {
  //@ts-ignore
  const IconInc = Icon[icon];

  return (
    <Link href={href} key={key} className={linkClass}>
      <IconInc className={iconClass} size={iconSize && iconSize}/>
      <div>{children}</div>
    </Link>
  );
}
