export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-full justify-center">{children}</div>;
}
