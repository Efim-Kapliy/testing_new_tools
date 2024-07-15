import { ReactNode } from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: ListProps<any>) {
  return <ul style={{ listStyleType: 'none', whiteSpace: 'nowrap' }}>{props.items.map(props.renderItem)}</ul>;
}
