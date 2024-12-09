import { libre_baskerville } from "@/app/ui/fonts";


export default function Heading( {children} ) {
  return (
    <h3 className={`${libre_baskerville.className} text-6xl`}>{children}</h3>
  )
}
