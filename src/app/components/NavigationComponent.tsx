import { dropdownNavs } from "../data/dropdownNavs.data";
import { ChevronUpIcon, ChevronDownIcon } from "./Icons";
import { DropdownState } from "./ui/Navbar";

interface Props {
  drapdownState: DropdownState;
  setDrapdownState: React.Dispatch<React.SetStateAction<DropdownState>>;
}

interface NavigationItem {
  title: string;
  path: string;
  isDrapdown: boolean;
  navs?: typeof dropdownNavs;
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
      navs: dropdownNavs,
    },
    {
      title: "Hombres",
      path: "javascript:void(0)",
      isDrapdown: false,
      navs: [],
    },
    { title: "Niños", path: "javascript:void(0)", isDrapdown: false, navs: [] },
    {
      title: "Explora",
      path: "javascript:void(0)",
      isDrapdown: false,
      navs: [],
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
              <a
                href={item.path}
                className="block text-gray-700 hover:text-indigo-600"
              >
                {item.title}
              </a>
            )}
            {item.isDrapdown &&
            drapdownState.idx == idx &&
            drapdownState.isActive ? (
              <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0 md:z-50 bg-white">
                <ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                  {item.navs?.map((dropdownItem, idx) => (
                    <li key={idx}>
                      <p className="text-indigo-600 text-sm">
                        {dropdownItem.label}
                      </p>
                      <ul className="mt-5 space-y-6">
                        {dropdownItem.navs.map((navItem, idx) => (
                          <li key={idx} className="group">
                            <a
                              href={navItem.path}
                              className="flex gap-3 items-center"
                            >
                              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                                {navItem.icon}
                              </div>
                              <div>
                                <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                  {navItem.title}
                                </span>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                                  {navItem.desc}
                                </p>
                              </div>
                            </a>
                          </li>
                        ))}
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
