import Providers from './providers';

import { metadata as baseMetadata } from './document';

export const metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-br'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
