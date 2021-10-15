import React from 'react';
import Discover from './Discover';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Routes() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log('useeegg');
    const url = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic N2U4NThjYmZiNzY0NGI1NzhlMGQxZGE2NmYxNWM1MTE6MmNlMTUxZDkwZjc2NDIxYjhkNzMxOGVmNWRkMTAyOTQ='
      }
    };
    axios
      .post(url, params, config)
      .then((result) => {
        console.log(result.data.access_token);
        setToken(result.data.access_token);
        window.localStorage.setItem('token', result.data.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>{token !== null ? <Discover /> : <p>loading...</p>}</div>;
}
