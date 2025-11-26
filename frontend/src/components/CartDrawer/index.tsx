import { CartDrawerContent } from "@/components/CartDrawer/components/CartDrawerContent";

export const CartDrawer = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="fixed bg-black box-border caret-transparent hidden opacity-50 z-[1050] inset-0"></div>
      <CartDrawerContent />
    </section>
  );
};
