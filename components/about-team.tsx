import { memberThuisa } from "@/lib/member";
import Image from "next/image";

export default function TeamMembers() {
  return (
    <div className="max-w-5xl md:mx-auto mt-20 flex">
      <div className="max-w-5xl md:mx-10 max-sm:mx-4">
        <h1 className="text-3xl md:text-4xl text-red-600 font-bold mb-6 md:mb-8 max-md:mx-7">
          Our teams
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 max-md:text-center">Leadership</h2>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"> */}
        <div className="flex flex-wrap md:gap-10 gap-5 mb-12 justify-center">
          {memberThuisa.map((member) => (
            <div
              className="flex flex-col items-center w-auto capitalize"
              key={member.name}
            >
              <Image
                src={`./members/${member.img ? member.img : "user"}.jpg`}
                alt="Leader 1"
                width={200}
                height={200}
                className="max-md:h-40 max-md:w-40 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold text-md md:text-xl">
                {member.name}
              </p>
              <p className="text-sm md:text-md text-gray-500">{member.role}</p>
              {member.head && <p className="text-sm md:text-md italic text-red-600">Head</p>}
            </div>
          ))}
          {/* <div className="flex flex-col items-center w-1/2 md:w-auto">
            <Image
              src="/members/user.jpg"
              alt="Leader 1"
              width={200}
              height={200}
              className="max-md:h-30 max-md:w-30 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold text-md md:text-xl">
              Abraham Rusli
            </p>
            <p className="text-sm md:text-md text-gray-500">President</p>
          </div>

          <div className="flex flex-col items-center w-1/2 md:w-auto">
            <Image
              src="/members/user.jpg"
              alt="Leader 2"
              width={200}
              height={200}
              className="max-md:h-30 max-md:w-30 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold">Evelyn</p>
            <p className="text-sm text-gray-500">Vice-President</p>
          </div>

          <div className="flex flex-col items-center w-1/2 md:w-auto">
            <Image
              src="/members/user.jpg"
              alt="Leader 3"
              width={200}
              height={200}
              className="max-md:h-30 max-md:w-30 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold">Leon</p>
            <p className="text-sm text-gray-500 font-medium">Advisor</p>
          </div>

          <div className="flex flex-col items-center w-1/2 md:w-auto">
            <Image
              src="/members/user.jpg"
              alt="Leader 4"
              width={200}
              height={200}
              className="max-md:h-30 max-md:w-30 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold">David</p>
            <p className="text-sm text-gray-500 font-medium">Advisor</p>
          </div> */}
        </div>

        {/* <h2 className="text-2xl font-semibold mb-4">
          Operation - Event Director
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <Image
              src="./images/member1.jpg"
              alt="Leader 1"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member2.jpg"
              alt="Leader 2"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Operation - General Affairs
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <Image
              src="./images/member1.jpg"
              alt="Leader 1"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member2.jpg"
              alt="Leader 2"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Program</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <Image
              src="./images/member1.jpg"
              alt="Leader 1"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member2.jpg"
              alt="Leader 2"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Finance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <Image
              src="./images/member1.jpg"
              alt="Leader 1"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member2.jpg"
              alt="Leader 2"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Communications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <Image
              src="./images/member1.jpg"
              alt="Leader 1"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member2.jpg"
              alt="Leader 2"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Design & Documentation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <Image
              src="./images/member1.jpg"
              alt="Leader 1"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member2.jpg"
              alt="Leader 2"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="./images/member3.jpg"
              alt="Leader 3"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-semibold"></p>
            <p className="text-sm text-gray-500 font-medium"></p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
