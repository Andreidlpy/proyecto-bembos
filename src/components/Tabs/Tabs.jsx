import useTabs from "@olivieralexander/usetabs";
import { useRef, useState } from "react";

import "./tabs.css";

const tabs = [
  {
    name: "Promociones Personales",
    id: "promociones__personales",
  },
  {
    name: "Promociones para 2",
    id: "promociones__two",
  },
  {
    name: "Promociones para compartir",
    id: "promociones__share",
  },
  {
    name: "Cupones",
    id: "cupons",
  },
];
export const Tabs = ({ onChangeSection }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const [fix, setFix] = useState(false);

  const containerRef = useRef(null);
  const defaultRef = useRef(null);

  const { setHightlight, highlightStyles } = useTabs({
    container: containerRef,
  });

  const setFixed = () => {
    if (window.scrollY >= 92) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  const onActiveTab = (id, e) => {
    setActiveTab(id);
    onChangeSection(id, e);
  };

  return (
    <section className={`tabs container ${fix ? "fixed" : ""}`}>
      <ul className="tabs__grid" ref={containerRef}>
        {tabs.map((tab, i) => (
          <li
            key={tab.id}
            ref={i === 1 ? defaultRef : null}
            onMouseEnter={setHightlight}
            onClick={(e) => onActiveTab(tab.id, e)}
            className={tab.id === activeTab ? "active-tab" : ""}
          >
            <span>{tab.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
