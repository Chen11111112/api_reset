# API.ts
for 北商大商業智慧研究中心 前端react教學
npm install axios

## api.ts
前端集訓用，適合教學用的api wrapper。
已解構成Promise<Data> (初期課程mock.api時適用)

## API.ts
專案開發用，可以取得header等資訊。
回傳完整Promise<AxiosResponse<Data>>
可在 xxxAPI.ts中解構:
```
getProduct: (): Promise<Products[]> => 
  API.get(`${BASE_URL}`).then(res => {
      return res.data?.data ?? []; 
    }),
```
