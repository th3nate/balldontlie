import React, {JSX, useContext, useEffect, useState} from 'react';
import {LoadingContext} from './context/loading.context';
import Spinner from './components/spinner';
import GenericList from './components/generic-list';
import {getData} from './services/api.service';
import {Player} from './types';
import Header from './components/header';

function App(): JSX.Element {
  const {isLoading, showLoading, hideLoading} = useContext(LoadingContext);
  const [data, setData] = useState<Player[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [bgColor, setBgColor] = useState<string>('#fff');
  const [searchString, setSearchString] = useState<string>('');

  useEffect((): void => {
    (async (): Promise<void> => {
      try {
        showLoading();
        const result: Player[] = await getData<Player>(
          `/players`,
        );
        setData(result);
        hideLoading();
      } catch (error) {
        hideLoading();
        console.error(error);
      }
    })();
    // eslint-disable-next-line
  }, []);

  const addToFavorites = (name: string) => setFavorites(favorites.includes(name) ? [...favorites] : [...favorites, name]);
  const removeFromFavorites = (name: string) => setFavorites([...favorites.filter((item) => name !== item)]);
  const handleSetBgColor = (hex: string) => setBgColor(hex);
  const filterList = (item: Player) => (`${item.first_name} ${item.last_name}`).toLowerCase().indexOf(searchString.toLowerCase()) !== -1;

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-2rem)] w-full">
      <div
        className="border border-slate-200 rounded bg-white w-2/4 m-auto grid row-auto grid-cols-2 gap-4 p-5 mt-5 mb-5">
        <Header onSetBgColor={handleSetBgColor}/>
        <div>
          {isLoading ? (
            <Spinner/>
          ) : (
            <>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Find by
                  name</label>
                <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchString(event.target.value)}
                       type="text" id="name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Find"/>
              </div>
              <GenericList<Player>
                data={data.filter(filterList)}
                keyExtractor={(item: Player): number => item.id}
                placeholder="No matches"
                renderItem={(item) => (
                  <>
                    <p className="rounded hover:bg-sky-100 p-1 mb-1 cursor-pointer" title="Add to favorites"
                       onClick={() => addToFavorites(`${item.first_name} ${item.last_name}`)}>{`${item.first_name} ${item.last_name}`}</p>
                  </>
                )}
              />
            </>
          )}
        </div>
        <div className="border-l p-5 border-slate-200" style={{backgroundColor: bgColor}}>
          <GenericList<string>
            data={favorites}
            keyExtractor={(item: string): string => item}
            placeholder="No favorites selected"
            renderItem={(item) => (
              <>
                <p className="rounded hover:bg-sky-100 p-1 mb-1 cursor-pointer"
                   title="Remove from favorites" onClick={() => removeFromFavorites(item)}>{item}</p>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
