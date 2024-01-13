import { usePostStore } from "@/store/post-store";

export default async function Home() {
  const posts = usePostStore.getState().posts;
  return (
    <div className="">
      <h1>Hello World!!!</h1>
    </div>
  );
}
