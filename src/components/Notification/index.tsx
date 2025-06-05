import type React from "react";
import css from "./Notification.module.css";

export default function Notification({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className={css.notification}>{children}</p>;
}
