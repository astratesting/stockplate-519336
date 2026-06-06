import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StockPlate - Smart Inventory Management for Restaurants',
  description: 'Stop losing 3-10% of revenue to inventory waste. StockPlate helps independent restaurants track stock, reduce over-ordering, and boost profits with smart, focused inventory management.',
  keywords: ['restaurant inventory', 'food cost management', 'restaurant software', 'inventory tracking', 'restaurant management'],
  openGraph: {
    title: 'StockPlate - Smart Inventory Management for Restaurants',
    description: 'Stop losing 3-10% of revenue to inventory waste. StockPlate helps independent restaurants track stock and boost profits.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
