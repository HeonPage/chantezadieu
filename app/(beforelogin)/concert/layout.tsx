export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 w-full flex flex-row">
      <div className="w-full flex flex-col">
        <div className="container w-full desktop-size:w-[1000px] py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
