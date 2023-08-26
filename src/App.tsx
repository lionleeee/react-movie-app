import { FC, useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

const App : FC = () =>{

  const [queryClient] = useState(
    ()=>
    new QueryClient({
      defaultOptions:{
        queries : {
          refetchOnWindowFocus : false, //포커스가 브라우저에 있을 때 쿼리가 자동으로 데이터를 가져오는지 여부 
          retry : 0 // 쿼리가 실패할 겨우 재시도 횟수
        },
      },
    })
  );

  return(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
