export interface Blog {
  id: string;
  title: string;
  description: string;
}
export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div id={blog.id}>
      <p className="text-xl font-bold text-slate-700">{blog.title}</p>
      <p className="text-lg font-semibold text-slate-600">{`${blog.description?.substring(
        0,
        100
      )}...`}</p>
    </div>
  );
}
