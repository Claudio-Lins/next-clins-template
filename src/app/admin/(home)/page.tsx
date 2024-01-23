export default async function AdminPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="flex h-screen w-full items-center justify-center font-sans">
      <h1>AdminPage</h1>
    </div>
  );
}
