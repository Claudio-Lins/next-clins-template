export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex h-screen w-full max-w-[1600px] items-center justify-center bg-[url('/assets/imgs/sean-pollock-PhYq704ffdA-unsplash.jpg')] bg-cover bg-center px-4">
      {children}
    </div>
  );
}
