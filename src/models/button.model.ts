export interface IButtonProps {
     type: string;
     href?: string;
     disabled?: boolean;
     size?: 'icon';
     variant?:
          | 'default'
          | 'destructive'
          | 'outline'
          | 'secondary'
          | 'ghost'
          | 'link';
}
