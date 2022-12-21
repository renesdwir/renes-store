import Image from "next/image";
import cx from "classnames";

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
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/ic-menu-${icon}.svg`}
          height={25}
          width={25}
          alt="menu-overview"
        />
      </div>

      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
