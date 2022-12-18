import Link from "next/link";
interface ListObj {
  text: string;
  url: string;
}
interface ListLinkProps {
  title: string;
  list: ListObj[];
}
export default function ListLink(props: ListLinkProps) {
  const { title, list } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {list?.map((e) => {
          return (
            <li className="mb-6">
              <Link
                href={e.url}
                className="text-lg color-palette-1 text-decoration-none"
              >
                {e.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
