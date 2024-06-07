import LayoutLeft from "@/components/base/LayoutLeft";
import { Button } from "@/components/ui/button";
import {
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandGoogle,
  IconMessage2,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-medium">FRONTEN DEVELOPER</h1>
      <div className="flex justify-between items-center">
        <p>
          <span className="text-4xl font-medium">PASSION AND</span>
          <span className="italic underline text-4xl font-semibold">
            EXPERIENCE.
          </span>
        </p>
        <div className="flex items-center gap-3">
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
            asChild
          >
            <Link
              href={"https://www.facebook.com/nam.notfake/"}
              target="_blank"
            >
              <IconBrandFacebook size={24} stroke={1} />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <Link
              href={"https://www.messenger.com/t/100040664353145"}
              target="_blank"
            >
              <IconMessage2 size={24} stroke={1} />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <Link href={"https://s.net.vn/IemP"} target="_blank">
              <IconBrandGoogle size={24} stroke={1} />
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <LayoutLeft />
      </div>
    </div>
  );
}
