import AppBar from "../components/AppBar";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
