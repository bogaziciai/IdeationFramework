import type { ReactNode } from "react";
import style from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={style.container}>{children}</div>;
}
