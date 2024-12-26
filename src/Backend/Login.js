import { request, gql } from "graphql-request";

const MASTER_URL = "https://sa-east-1.cdn.hygraph.com/content/clwhev8u6000001w622hth49y/master";
const MASTER_URL_ASSET = "https://sa-east-1.cdn.hygraph.com/content/clwhev8u6000001w622hth49y/master/upload";
const HYGRAPH_PRDO_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTYzNTczNzksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2x3aGV2OHU2MDAwMDAxdzYyMmh0aDQ5eS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1zYS1lYXN0LTEuaHlncmFwaC5jb20vIiwic3ViIjoiYjI1OGQ4MTctMmFkZC00NzdhLWI1OWUtZTNmZTY1NzQ0MDlhIiwianRpIjoiY2wxcDJyY3l5MDY2eDAxd2U3cDVmZWl6ZiJ9.ajR9ElrgnCeljRx2MkyoUGbXHue0slN0eEYZTOcsI0NlgpbucONI7OyNb51N57pcib0E7zzKR8djJ09eUVd41W4fjVf5HtBZNWiWvdPGzmsZH7-0XfZlIFIxz7WM1MIrdgmgXHR322PGrijCYfnJtI-oGFlvkoKyP0xeVGix7vZrrGy3c1lv4IRfUoM37RMrtiI-jK8ochzeyevClTykBI5IR-UNmYmTAMB6OK5N7kNZjO5FUxHzcinuAe2nT1frwa-MUEMWvWLMRmuhCDA5IyhSU9eOl9DwF7HjhGQBAX7rWYehB76l_3M_nQQckRmr9GHcmpJpabnXFIAhVqMBj-AU_hW8IWJYSB6vI7Dx_8hkck-xiE8f3DX2iLlLOG42i272Zv4gV6N5w43SpdUixMdUfHVaamnZNTc_x8S-xJairVgZyz_UvsPxA_2EnOaHbLOPcgPVqCPtNdnjOLvz528VkCN2UsoSj9MNyimP8SkZcPzh1KdAPfR07HUA5zULtuxFLAideZZGB2cGceYpnT6nfN1X1hzb8zGFcefwOv9a-P_i56-Sw4MPyAoIeGWPfpbVbyPI-zMiWN-1OIiWEQvdbGRAifwYSZEhMBGSfjygIxAmkiYaSK0-Bz-4GAg3QzgGV_dXJbzXahpnI_-V-ZFEj66FmRMifgoE6dcCw10";
const HYGRAPH_DEV_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTYzNTczNzksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2x3aGV2OHU2MDAwMDAxdzYyMmh0aDQ5eS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1zYS1lYXN0LTEuaHlncmFwaC5jb20vIiwic3ViIjoiNjQ5YTRiN2UtNWYyMC00MzNiLWJiYTUtODU1YjY1NmM3YTU5IiwianRpIjoiY2wxbTBsd3AwMDNuYjAxeGtlNXN0OWtzdyJ9.GInH7HMAtlt-vPFgi_-w8uHM5yb57q_K2a6xKPX_PNe9BfPhh3VVVy4Xq7BiZkUpko1E_NIsf9o87_lGUd-v5kcFlaoi5ozhcOHQIy9Km35rt7uPgxAhnn3IUp4JAKF9eynUnBcyU4Eocsm3_Z8QRwCgO2NgAtmaUO1CcZNfV1ZshjX8Wn-XT-Td3zfmOv2wVql_d8D9DV76BV3DssRvSFXuUg8zVwXiBBirix-CJ8zkk8epqCYJTXQaAf09AeyrKov0zKdQBSlw80F_RHT7rqHEYcSNekPoZaV7JE6igQUBlewcxEylh6Jir-8apaVtq14WV_1hawHy7eAO-hG-NCJJ0GbKMv4pzABOicmmpWdl-GcjFYdSJ3l-7COk4knbe1LeNU5HVmjHzKL42E6NKkKFblJRwHtbGGoA6BLxJwvXOW_Jn2gcpMjS3F4sb6-iza-qomizsIkzJFoAv61CNBkLAVl0wOxewX2rv0MUWR9RRnQ-bOREwFYRU67irg-mrq3b3gIYhR0KZ8_Ryno8Qr2TMiR7CScYR6aNNcetjV_r6NJzYwrSRpLEonhJenz-oZ0e2ad1DA4XrBu9QEsJFrMjwYHkr9Rcc0Pp2or2XJnwfTGsyOEWk6xinYN3orlu6k80Ari8z7qkl76Xul_yUg8BlcJPexSPBJI8JWD9FMA";

const LOGIN_QUERY = gql`
  query LoginBusiness($user: String!, $password: String!) {
    user(where: { user: $user, password: $password }) {
      user
      password
    }
  }
`;

export const login = async (user, password) => {
  console.log("Tentando fazer login com:", { user, password }); // Log para depuração
  try {
    const data = await request(MASTER_URL, LOGIN_QUERY, { user, password });
    console.log("Dados retornados:", data); // Log para depuração
    return data.user;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    console.error("Detalhes do erro:", error.response.errors); // Log detalhado do erro
    console.error("Requisição enviada:", error.request); // Log da requisição enviada
    return null;
  }
};
