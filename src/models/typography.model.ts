export interface ITypographyProps {
     bold?:
          | 'extralight'
          | 'light'
          | 'normal'
          | 'medium'
          | 'semibold'
          | 'bold'
          | 'extrabold';
     size?:
          | 'xs'
          | 'sm'
          | 'base'
          | 'lg'
          | 'xl'
          | '2xl'
          | '3xl'
          | '4xl'
          | '5xl'
          | '6xl'
          | ' 7xl';
     tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}
