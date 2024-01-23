export default async function AuthPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1>AuthPage</h1>
    </div>
  );
}
