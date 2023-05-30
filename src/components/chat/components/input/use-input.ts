import React, { useEffect, useState } from 'react';

const useInput = (onClick: (query: string) => Promise<void>) => {
  const [query, setQuery] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    if (query.length > 0) {
      onClick(query).finally(() => setQuery(''));
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        handleClick();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [handleClick]);

  return {
    query,
    onChange,
    handleClick,
  };
};

export default useInput;
