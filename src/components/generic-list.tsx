import React from 'react';

interface ListProps<T> {
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => number | string;
  data: T[];
  className?: string;
  placeholder?: string;
}

function GenericList<T>({
                          renderItem,
                          keyExtractor,
                          data,
                          className,
                          placeholder = 'No results',
                        }: ListProps<T>) {
  return (
    <>
      {data && data.length ? (
        <>
          {data.map((item: T) => (
            <div className={className} key={keyExtractor(item)}>
              {renderItem(item)}
            </div>
          ))}
        </>
      ) : (
        <p>{placeholder}</p>
      )}
    </>
  );
}

export default GenericList;
