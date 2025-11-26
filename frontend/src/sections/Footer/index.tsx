import { FooterFeatures } from "@/sections/Footer/components/FooterFeatures";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent">
      <FooterFeatures />
      <div className="box-border caret-transparent">
        <section className="box-border caret-transparent h-7 md:h-10"></section>
      </div>
      <FooterLinks />
    </footer>
  );
};
