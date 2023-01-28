import ResponsiveAppBar from "../commons/ResponsiveAppBar/ResponsiveAppBar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <ResponsiveAppBar />
      <main>{children}</main>
    </>
  );
}
