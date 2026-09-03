export default function VertexMark({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <>
      <img src="/vertex-mark.svg" alt="" className={`${className} dark:hidden`} />
      <img src="/vertex-mark-dark.svg" alt="" className={`${className} hidden dark:block`} />
    </>
  )
}
