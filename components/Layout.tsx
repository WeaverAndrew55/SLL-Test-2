import { ReactNode } from 'react'
// We'll add navigation and footer imports later

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation will go here */}
      <main className="flex-grow">{children}</main>
      {/* Footer will go here */}
    </div>
  )
}