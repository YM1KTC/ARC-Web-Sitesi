import type { PropsWithChildren } from 'react';

// Portable Text editöründe blok stillerinin sitedeki görünüme yakın
// render edilmesi için küçük önizleme bileşenleri. Sadece Studio'da kullanılır.

const heading = {
  fontFamily: "'Inter Variable', Inter, system-ui, sans-serif",
  fontWeight: 700,
  lineHeight: 1.25,
  letterSpacing: '-0.015em',
  margin: 0,
} as const;

export function H2Preview({ children }: PropsWithChildren) {
  return <h2 style={{ ...heading, fontSize: '1.6rem' }}>{children}</h2>;
}

export function H3Preview({ children }: PropsWithChildren) {
  return <h3 style={{ ...heading, fontSize: '1.35rem' }}>{children}</h3>;
}

export function H4Preview({ children }: PropsWithChildren) {
  return <h4 style={{ ...heading, fontSize: '1.15rem' }}>{children}</h4>;
}

export function QuotePreview({ children }: PropsWithChildren) {
  return (
    <blockquote
      style={{
        borderLeft: '4px solid #2563eb',
        paddingLeft: '0.9rem',
        margin: 0,
        fontStyle: 'italic',
        color: '#64748b',
        lineHeight: 1.7,
      }}
    >
      {children}
    </blockquote>
  );
}

export function NormalPreview({ children }: PropsWithChildren) {
  return <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7 }}>{children}</p>;
}
