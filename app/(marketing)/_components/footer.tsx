"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  const onclickPolicy = () => {
    router.push(`/privacy-policy`);
  };

  const onclickTerms = () => {
    router.push(`/terms-and-conditions`);
  };

  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm" onClick={onclickPolicy}>
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm" onClick={onclickTerms}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
