"use client";
import React, { FunctionComponent } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Spotlight from "../Spotlight";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { nav } from "@/app/navList";
// const navList = ;

interface HeaderProps {
  navList: nav[];
}

const Header: FunctionComponent<HeaderProps> = ({ navList }) => {
  const pathName = usePathname();
  // console.log("path", pathName);
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Image
          src="/assets/logo_transparent.png"
          alt="logo"
          width={50}
          height={50}
          // className={styles.vertical}
        />
        <span className={`${styles.logoText} `}>
          {/* 工作再累年紀再大
          <br />
          只要打個球沒什麼不可以 */}
        </span>
      </div>
      {/* <div className={styles.navList}> */}
      <nav className={styles.navList}>
        <ul>
          {navList.map((nav: nav) => (
            <li key={nav.id}>
              <Spotlight>
                <Link
                  href={nav.route}
                  style={{
                    color: `${
                      pathName === nav.route && styles.linkActiveColor
                    }`,
                  }}
                >
                  {nav.name}
                </Link>
              </Spotlight>
            </li>
          ))}
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
