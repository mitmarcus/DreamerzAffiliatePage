import { Button } from "@/components/ui/button";

export default function AffiliateCTA() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-28 px-16 bg-linear-135 from-[#E7FBF5] via-[#F9F0FC] to-[FAFAF0]">
      <h1 className="text-3xl font-bold mb-4">Your Success is Our Dream!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Become a Dreamerz affiliate and explore a world of opportunities. Earn
        commissions by <br /> promoting dreams and helping others achieve their
        goals.
      </p>
      <Button className="bg-black text-white hover:bg-gray-800">
        Join Today
      </Button>
    </section>
  );
}
