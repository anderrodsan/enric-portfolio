import Image from "next/image";

export function CompanyList() {
  const Logos = [
    "coinbase",
    "spotify",
    "slack-white",
    "adobe",
    "webflow",
    "zoom",
  ];
  return (
    <div className="flex flex-wrap justify-center w-full py-12 items-center gap-4 lg:gap-20 px-5 md:px-20 max-w-[1400px]">
      {Logos.map((logo) => (
        <Image
          key={logo}
          src={`/images/logos/${logo}.png`}
          alt={logo}
          width={100}
          height={100}
          className="w-28 lg:w-32 h-auto object-contain"
        />
      ))}
    </div>
  );
}
