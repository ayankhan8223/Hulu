import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex items-center flex-col sm:flex-row m-5 justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl items-center">
        <HeaderItem title={"HOME"} Icon={HomeIcon} />
        <HeaderItem title={"TRENDING"} Icon={LightningBoltIcon} />
        <HeaderItem title={"VERIFIED"} Icon={BadgeCheckIcon} />
        <HeaderItem title={"COLLECTIONS"} Icon={CollectionIcon} />

        <HeaderItem title={"SEARCH"} Icon={SearchIcon} />
        <HeaderItem title={"ACCOUNT"} Icon={UserIcon} />
      </div>
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </div>
  );
}

export default Header;
