import { Typography } from "@material-tailwind/react";

const logos = [
  "microsoft",
  "cisco",
  "ibm",
  "amazons",
  "salesforce",
  "vodafone",
];

const numOfImages = Array.from({ length: 9 }, (_, i) => i + 1);

export function LogoSectionOne({
  heading,
  desc,
}: {
  heading?: string;
  desc?: string;
}) {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        {heading && <Typography variant="h2">{heading}</Typography>}
        <Typography color="blue-gray" className="text-xl font-extrabold mb-8">
          {desc || "Trusted by the best companies"}
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {numOfImages.map((num, key) => (
            <img
              key={key}
              src={`clients/image-${num}.png`}
              alt={`client-${num}`}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSectionOne;
