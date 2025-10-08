import { memberThuisa } from "@/lib/member";
import Image from "next/image";
import { useMemo } from "react";
import { Member } from "@/lib/types";

export default function TeamMembers() {
  // using useMemo
  const groupedByRole = useMemo(() => {
    const map = new Map<string, Member[]>();
    for (const m of memberThuisa) {
      if (m.role === "president" || m.role === "vice president") {
        m.role = "leadership";
      }
      if (!map.has("leadership")) map.set("leadership", []);
      if (!map.has(m.role)) map.set(m.role, []);
      map.get(m.role)!.push(m);
    }
    return map;
  }, []);
  return (
    <div className="max-w-5xl md:mx-auto mt-20">
      <h1 className="text-3xl md:text-4xl text-red-600 font-bold mb-6 md:mb-8 md:mx-10 max-md:text-center">
        Our teams
      </h1>
      <div className="max-w-5xl md:mx-auto max-sm:mx-4">
        {[...groupedByRole.entries()].map(([role, members]) => (
          <section key={role}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center capitalize">
              {role}
            </h2>

            <div className="flex flex-wrap md:gap-10 gap-2 mb-12 justify-center">
              {members.map((m) => (
                <div
                  className="flex flex-col items-center w-auto capitalize"
                  key={m.name}
                >
                  <Image
                    src={`./members/${m.img ?? "user"}.jpg`}
                    alt={m.name}
                    width={200}
                    height={200}
                    className="max-md:h-37 max-md:w-37 object-cover rounded-xl shadow-md"
                  />
                  <p className="mt-2 font-semibold text-md md:text-xl">
                    {m.name}
                  </p>
                  <p className="text-sm md:text-md text-gray-500">
                    {m.head && "Head of "}
                    {m.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
