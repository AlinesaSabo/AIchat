import { Suspense } from "react";
import Loader from "./Loader/Loader.js";
import Navigation from "./Navigation/Navigation.js";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
