import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "overview"
    | "card"
    | "logout"
    | "messages"
    | "rewards"
    | "settings"
    | "transactions";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/", onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image
          src={`/icon/ic-menu-${icon}.svg`}
          height={25}
          width={25}
          alt="menu-overview"
        />
      </div>

      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href} className="text-lg text-decoration-none">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
}
