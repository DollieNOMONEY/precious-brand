import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'PRECIOUS',
    template: '%s | PRECIOUS',
  },
  description: 'The official website for Precious. Learn more about us.',
};

export default function BlogLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className='mx-center text-center'>
      <div className='mb-5'/>
      {children}
      <div className='mb-5'/>
    </div>
  )
}