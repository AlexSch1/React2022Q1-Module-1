import { Input } from '../../forms/Input/Input';
import { Button } from '../../forms/Button/Button';
import './SearchBar.scss';
import { useEffect, useRef, useState } from 'react';
import { LocalStorageService } from '../../../services/LocalStorage/LocalStorage.service';

export const SearchBar = () => {
  const localStorageService = useRef<LocalStorageService>();
  const [value, setValue] = useState('');
  const storageKey = 'search-value';

  const changeValue = (value: string) => {
    setValue(value);

    localStorageService.current?.addItem(storageKey, value);
  };

  useEffect(() => {
    localStorageService.current = new LocalStorageService();

    if (localStorageService.current?.hasItem(storageKey)) {
      const storageValue = localStorageService.current?.getItem(storageKey);

      setValue(storageValue!);
    }
  }, []);

  return (
    <div className="search-bar">
      <div className="search-bar__inner">
        <Input
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          placeholder="Enter your value"
        ></Input>
        <Button>Search</Button>
      </div>
    </div>
  );
};
