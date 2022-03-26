import { useEffect, useState } from 'react';
type Props = {
  query: any;
};
export default function Third(props: Props) {
  const [list, setlist] = useState([]);
  let arr: any = [];
  async function getdata() {
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=d4ef5175c0d0339c0eea6c2af742d5ec&query=${props.query}`
    );
    const data = await res.json();
    arr = [data];
    setlist(arr);
    //console.log(arr);
  }
  useEffect(() => {
    getdata();
    console.log(props.query);
  }, []);
  return (
    <div style={{ marginTop: '-100px' }}>
      {list.map(
        ({ current: { temperature, weather_icons, wind_speed, Trecit } }) => {
          return (
            <div key={temperature}>
              <p>Temp : {temperature}</p>
              <p>
                Whether_icon :{' '}
                <img
                  src={weather_icons}
                  alt='logo'
                  width='20px'
                  height='20px'
                />
              </p>
              <p>Wind_speed : {wind_speed}</p>
              <p>Trecit: {Trecit}</p>
            </div>
          );
        }
      )}
    </div>
  );
}
