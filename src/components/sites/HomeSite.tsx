import CtaSection from "../screens/CtaSection";
import FaqSection from "../screens/FaqSection";
import FeatureSection from "../screens/FeatureSection";
import FooterSection from "../screens/FooterSection";
import HeroSection from "../screens/HeroSection";
import SignUpModal from "../screens/SignupModal";
import TeamSection from "../screens/TeamSection";

export default function HomeSite() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CtaSection />
      <TeamSection />
      <FaqSection />
      <FooterSection />
      <SignUpModal />
    </>
  )
}