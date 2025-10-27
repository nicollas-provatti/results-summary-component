export default function Results() {
  return (
    <div className="flex flex-col justify-between gap-5 bg-linear-to-b from-light-slate-blue to-light-royal-blue p-8 text-center text-white rounded-b-4xl md:rounded-4xl md:w-1/2">
      <h1 className="text-pale-blue text-xl">Your Result</h1>
      <div className="flex flex-col justify-center items-center bg-linear-to-b from-violet-blue to-persian-blue rounded-full w-40 h-40 mx-auto">
        <p className="text-6xl font-extrabold">76</p>
        <p className="text-light-lavender">of 100</p>
      </div>
      <h2 className="text-2xl font-bold">Great</h2>
      <p className="text-light-lavender text-lg ">
        Your scored highter than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
