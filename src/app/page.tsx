import AffiliateCTA from "@/components/affiliatecta";
import AffiliateSection from "@/components/affiliatesection";
import AffiliateSteps from "@/components/affiliatesteps";
import FAQSection from "@/components/faqsection";
import FeaturesSection from "@/components/featuressection";

export default function Home() {
  return (
    <>
      <AffiliateSection />
      <FeaturesSection />
      <AffiliateSteps />
      <AffiliateCTA />
      <FAQSection />
    </>
  );
}
