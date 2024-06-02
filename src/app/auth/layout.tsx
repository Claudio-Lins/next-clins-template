export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="to-vcaBlue-800 from-vcaBlue-400 flex min-h-screen w-full max-w-[1600px] items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] p-4">
      {children}
    </div>
  );
}
