import Link from "next/link";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

type TBlog = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

async function getBlogContent(postId: string) {
  const res = await fetch(`${BASE_URL}${postId}`);

  return res.json();
}

export default async function Page(
  { params: { slug } }: { params: { slug: string } },
) {
  const { userId, id, title, body }: TBlog = await getBlogContent(slug);

  return (
    <>
      <h1 className="font-bold pt-8">{title}</h1>
      <div>
        <pre className="pt-9">
            <em>{body}</em>
        </pre>
      </div>
      <h2>ID: {id} - USERID:{userId}</h2>

      <Link href="/">
        <div className="pt-[50px]">Go Home</div>
      </Link>
    </>
  );
}
