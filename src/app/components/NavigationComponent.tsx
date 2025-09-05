import { ChevronUpIcon, ChevronDownIcon } from "./Icons";
import { DropdownState } from "./ui/Navbar";
import { NavigationItem } from "../interfaces/navigation.interface";
import { exploreNavs, kidsNavs, menNavs, womenNavs } from "../data/navs.data";
import Link from "next/link";

interface Props {
  drapdownState: DropdownState;
  setDrapdownState: React.Dispatch<React.SetStateAction<DropdownState>>;
}

export default function NavigationComponent({
  drapdownState,
  setDrapdownState,
}: Props) {
  const navigation: NavigationItem[] = [
    {
      title: "Mujeres",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: womenNavs,
    },
    {
      title: "Hombres",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: menNavs,
    },
    {
      title: "Niños",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: kidsNavs,
    },
    {
      title: "Explora",
      path: "javascript:void(0)",
      isDrapdown: true,
      navs: exploreNavs,
    },
  ];

  return (
    <>
      {navigation.map((item, idx) => {
        return (
          <li key={idx} className="font-poppins">
            {item.isDrapdown ? (
              <button
                className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600 cursor-pointer"
                onClick={() =>
                  setDrapdownState({
                    idx,
                    isActive: !drapdownState.isActive,
                  })
                }
              >
                {item.title}
                {drapdownState.idx == idx && drapdownState.isActive ? (
                  <ChevronUpIcon />
                ) : (
                  <ChevronDownIcon />
                )}
              </button>
            ) : (
              <Link
                href={item.path}
                className="block text-gray-700 hover:text-indigo-600"
              >
                {item.title}
              </Link>
            )}
            {item.isDrapdown &&
            drapdownState.idx == idx &&
            drapdownState.isActive ? (
              <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0 md:z-50 bg-white">
                <ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                  {item.navs?.map((dropdownItem, idx) => (
                    <li key={idx}>
                      <ul className="mt-5 space-y-6">
                        {dropdownItem.navs.map((navItem, idx) => (
                          <li key={idx} className="group">
                            <Link
                              href={navItem.path}
                              className="flex gap-3 items-center"
                            >
                              <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                {navItem.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                        <hr />
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </>
  );
}
