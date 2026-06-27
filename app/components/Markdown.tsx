import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

/**
 * Renders trusted docs markdown (from `content/docs/`). Server-rendered at build
 * time (static export), so it adds no client JS. Dark prose to match the site.
 */
export function Markdown({ children }: { children: string }) {
  return (
    <div
      className="prose prose-invert max-w-none
        prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:text-white
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-2
        prose-h3:text-lg
        prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-white
        prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline
        prose-table:text-sm prose-th:text-zinc-200 prose-td:text-zinc-300
        prose-hr:border-zinc-800"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
