import Firsttabsection from "./Firsttabsection";
import Fivethtabsection from "./fivethtabsection";
import Fourthtabsection from "./Fourthtabsection";
import Secondtabsection from "./Secondtabsection";
import Thirdtabsection from "./Thirdtabsection";

export const tabs = [
  {
    key: "1",
    label: "Single App Kiosk",
    children: <Firsttabsection />,
  },
  {
    key: "2",
    label: "Multi-App Kiosk",
    children: <Secondtabsection />,
  },
  {
    key: "3",
    label: "Web-based Kiosk",
    children: <Thirdtabsection />,
  },
  {
    key: "4",
    label: "Digital Signages",
    children: <Fourthtabsection />,
  },
  {
    key: "5",
    label: "ASAM Kiosk",
    children: <Fivethtabsection />,
  },
];
