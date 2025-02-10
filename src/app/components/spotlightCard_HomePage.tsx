interface SpotlightCardParameters {
  spotlightHeader: React.ReactNode;
  spotlightTitle: string;
  spotlightContent: React.ReactNode;
}

function SpotlightCard_HomePage({
  spotlightHeader,
  spotlightTitle,
  spotlightContent,
}: SpotlightCardParameters) {
  return (
    <div className="font-roboto bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 max-w-sm md:max-w-4xl mx-8 mb-8">
      {spotlightHeader && (
        <div className="mb-8">
          <p className="font-bold text-3xl md:text-4xl text-center">
            {spotlightHeader}
          </p>
          <hr className="-mt-2 w-2/3 border-t-2 border-gray-400 mx-auto" />
        </div>
      )}

      <p className="font-medium text-2xl md:text-3xl -mt-4 text-center">
        {spotlightTitle}
      </p>
      <div>{spotlightContent}</div>
    </div>
  );
}

export default SpotlightCard_HomePage;
