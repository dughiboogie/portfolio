import Link from "next/link";

interface SpotlightCardParameters {
  spotlightHeader: string;
  spotlightTitle: string;
  spotlightContent: React.ReactNode;
}

function SpotlightCard_HomePage({
  spotlightHeader,
  spotlightTitle,
  spotlightContent,
}: SpotlightCardParameters) {
  return (
    <div className="font-roboto bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 max-w-sm md:max-w-4xl mx-8">
      <p className="font-bold text-2xl md:text-3xl text-center">
        {spotlightHeader}
      </p>
      <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left">
        {spotlightTitle}
      </p>
      <div>{spotlightContent}</div>
    </div>
  );
}

export default SpotlightCard_HomePage;
